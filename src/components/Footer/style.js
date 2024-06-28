import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const StyledNavLink = styled(RouterNavLink)`
  color: white; /* Cor do texto */
  text-decoration: none; /* Remove o sublinhado */
  margin: 10px; /* Espaçamento horizontal */
  &:hover { /* Estilização para hover */
    color: #cccccc; /* Cor mais clara no hover */
  }
`;
// Estilos existentes para Header, adicione estilos semelhantes para Footer
export const Footer = styled.footer`
  background-color: #000;  // Suponha uma cor de fundo semelhante ao header
  color: white;
  text-align: center;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 4px rgba(0,0,0,0.1);  // Sombra projetada para cima
  padding: 50px 0px 0px 0px;
  span{
    background-color: #000;
    display: block;
    padding-top: 50px;
    color: gray;
  }
`;
export const Title = styled.h1`
  font-size: 24px;
  margin: 0px 0px 10px 0px;
  padding: 0;
`;
export const Subtitle = styled.p`
  font-size: 18px;
  margin: 20px 0px 0px 0px;
`;

// Você pode reutilizar Title e Subtitle caso eles sejam adequados
