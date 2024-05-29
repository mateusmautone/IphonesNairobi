import React, { useEffect, useState } from 'react';
import db from '../../firebase-config'; 
import { collection, getDocs, query, limit } from 'firebase/firestore';

import * as B from "./style";


const EventFeed = () => {
    const [events, setEvents] = useState([]);
  
    useEffect(() => {
      const fetchEvents = async () => {
        const eventsCollectionRef = collection(db, "Celulares"); 
        const data = await getDocs(eventsCollectionRef);
        setEvents(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      };
  
      fetchEvents();
    }, []);
  
    return (
    <B.ListaFeed>
      {events.map(event => (
        <B.Item key={event.id}>
            <B.FotoProduto></B.FotoProduto>
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
  
  export default EventFeed;
  