import styled from "styled-components";

export const Item = styled.div`
  margin-bottom: 20px; 
  padding: 1%; 
  border: 1px solid #ccc; 
  border-radius: 10px; 
  outline: none; 
  background-color: white; 
  box-shadow: 7px 10px 13px 2px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: #f7f7f7;
    cursor: pointer;
    transform: translateY(
      -5px
    ); // Levanta ligeiramente o item ao passar o mouse
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15); // Sombra mais proeminente no hover
  }

  display: flex; 
  flex-direction: column;
  align-items: flex-start; 
  justify-content: center;
  text-align: center;
  height: 300px;
  width: 80%; 
  max-width: 200px; 
  margin: 10px 20px;
  h1 {
    font-size: 1.1rem;
    text-transform: uppercase;
    margin: 20px 5px 5px 0px;
    font-weight: 600;
  }
  h2 {
    font-size: 1em;
    color: green;
    font-weight: 200;
    margin: 0px;
  }
  p {
    font-size: 1rem;
  }
`;

export const Info = styled.div`
  width: 200px;
  height: 100px;
  padding: 2px;
`;

export const ListaFeed = styled.div`
  display: flex;
  justify-content: center;
  
  /* background-color: blue; */
  /* overflow-x: auto;  // Permite o scroll horizontal
  white-space: nowrap;  // Mantém todos os itens na mesma linha horizontal */
  max-width: 100vw;
  margin-bottom: 50px;
`;
export const FotoProduto = styled.div`
  /* background-color: grey; */
  border-radius: 6px;
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  object-fit: cover;
  img{
    margin: 0 auto;
    width: 90%;
    height: auto;
  }
`;
