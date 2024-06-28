import React, { useEffect, useState } from 'react';
import { db } from '../../firebase-config';
import { collection, getDocs, query, limit } from 'firebase/firestore';
import * as B from "./style";
import placeholderImage from '../../photos/sem-foto.jpg'; // Ajuste o caminho conforme necessário
import { useNavigate } from 'react-router-dom';

const EventFeed = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsCollectionRef = collection(db, "Celulares");
      const limitedQuery = query(eventsCollectionRef, limit(5)); // Limita a consulta a 5 documentos
      const data = await getDocs(limitedQuery);
      setEvents(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };

    fetchEvents();
  }, []);

  const navigate = useNavigate();

  const goToProductPage = (productId) => {
    navigate(`/produto/${productId}`);
  };
  
  return (
    <B.ListaFeed>
      {events.map(event => (
        <B.Item key={event.id} onClick={() => goToProductPage(event.id)}>
          <B.FotoProduto>
          <img src={event.ImagemUrl || placeholderImage} alt={event.Modelo || "Produto"} />
          </B.FotoProduto>
          <B.Info>
            <h1>{event.Modelo}</h1>
            <h2>{event.Preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2>
            {/* <p>{event.Descricao}</p> */}
          </B.Info>
        </B.Item>
      ))}
    </B.ListaFeed>
  );
};

export default EventFeed;
