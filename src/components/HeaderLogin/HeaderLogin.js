import React from "react";
import * as S from "../../App.styles";
import "primeicons/primeicons.css";
// import HeaderLoginStyle from "./style";

import { NavLink } from 'react-router-dom';

const HeaderLogin = () => {
  return (
    <S.HeaderLogin>
      <S.Title>Iphones do Nairobi</S.Title>
      <nav>
        <NavLink to="/" style={{ textDecoration: 'none', color: 'white', marginRight: '15px' }}>Home</NavLink>
        <NavLink to="/login" style={{ textDecoration: 'none', color: 'white', marginRight: '15px' }}>Login</NavLink>
        <NavLink to="/signin" style={{ textDecoration: 'none', color: 'white' }}>Cadastro</NavLink>
      </nav>
      <S.Subtitle>
        <i
          className="pi pi-lock"
          style={{ color: "white", fontSize: "2.0rem" }}
        ></i>
        100% Seguro
      </S.Subtitle>
    </S.HeaderLogin>
  );
};

export default HeaderLogin;
