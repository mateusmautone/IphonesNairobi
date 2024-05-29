import React from "react";
import * as B from "./style";  // Certifique-se que este caminho está correto


const Footer = () => {
  return (
    <B.Footer>
      <B.Title>iPhones do Nairobi</B.Title>
      <nav>
        <B.StyledNavLink to="/" >Home</B.StyledNavLink>
        <B.StyledNavLink to="/login" >Login</B.StyledNavLink>
        <B.StyledNavLink to="/signin" >Cadastro</B.StyledNavLink>
      </nav>
      
      <B.Subtitle>
        <i className="pi pi-lock" style={{ color: "white", fontSize: "2.0rem" }}></i>
        100% Seguro
      </B.Subtitle>
      <span>2024 © iPhones do Nairobi. Todos os direitos reservados.</span>
    </B.Footer>
  );
};

export default Footer;
