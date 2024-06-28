import React, { useEffect, useState } from 'react';
import { db } from '../../firebase-config';
import placeholderImage from '../../photos/sem-foto.jpg'; // Ajuste o caminho conforme necessário
import { collection, getDocs } from 'firebase/firestore';
import * as B from "./style";
import { useNavigate } from 'react-router-dom';


const EventFeedRelogio = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsCollectionRef = collection(db, "Relogios"); 
      const data = await getDocs(eventsCollectionRef);
      setEvents(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };

    fetchEvents();
  }, []);

  const navigate = useNavigate();

  const goToProductPage = (productId) => {
    navigate(`/produto3/${productId}`);
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
          {/* <p>{event.Descricao}</p>   */}
        </B.Info>
      </B.Item>
    ))}
  </B.ListaFeed>
  );
};
  
  export default EventFeedRelogio;
  