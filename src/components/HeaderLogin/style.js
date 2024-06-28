import styled from "styled-components";
import { NavLink as RouterNavLink } from 'react-router-dom';

export const HeaderLoginStyle = styled.div`
    background-color: blue;
`;

export const StyledNavLink = styled(RouterNavLink)`
  color: white; /* Cor do texto */
  text-decoration: none; /* Remove o sublinhado */
  margin: 10px; /* Espaçamento horizontal */
  &:hover { /* Estilização para hover */
    color: #cccccc; /* Cor mais clara no hover */
  }
`;