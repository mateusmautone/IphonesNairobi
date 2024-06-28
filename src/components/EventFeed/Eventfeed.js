import React, { useEffect, useState } from 'react';
import { db } from '../../firebase-config';
<<<<<<< HEAD
import { collection, getDocs, query, limit } from 'firebase/firestore';
import * as B from "./style";
import placeholderImage from '../../photos/sem-foto.jpg'; // Ajuste o caminho conforme necessário
import { useNavigate } from 'react-router-dom';
=======

import { collection, getDocs, query, limit } from 'firebase/firestore';

import * as B from "./style";

>>>>>>> 76042a4b4cd2a513b29a2a8f2ec75acdb5b933d2

const EventFeed = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsCollectionRef = collection(db, "Celulares");
<<<<<<< HEAD
      const limitedQuery = query(eventsCollectionRef, limit(5)); // Limita a consulta a 5 documentos
=======
      const limitedQuery = query(eventsCollectionRef, limit(5)); // Limita a consulta a 4 documentos
>>>>>>> 76042a4b4cd2a513b29a2a8f2ec75acdb5b933d2
      const data = await getDocs(limitedQuery);
      setEvents(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };

    fetchEvents();
  }, []);
<<<<<<< HEAD

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
=======
  
    return (
    <B.ListaFeed>
      {events.map(event => (
        <B.Item key={event.id}>
            <B.FotoProduto></B.FotoProduto>
          <B.Info>
            <h1>{event.Modelo}</h1>  
            <h2>{event.Preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2>
            {/* <p>{event.Descricao}</p>   */}
>>>>>>> 76042a4b4cd2a513b29a2a8f2ec75acdb5b933d2
          </B.Info>
        </B.Item>
      ))}
    </B.ListaFeed>
<<<<<<< HEAD
  );
};

export default EventFeed;
=======
    );
  };
  
  export default EventFeed;
  
>>>>>>> 76042a4b4cd2a513b29a2a8f2ec75acdb5b933d2
