import React from "react";
import * as S from "../../App.styles";
// import HeaderLoginStyle from "./style";
import Logo from '../../photos/logoBranca'

// import { NavLink } from 'react-router-dom';

const HeaderLogin = () => {
  return (
    <S.SaleHeader>
      <Logo></Logo>
      <S.SaleNav>
        <S.SaleNavItem href="/">HOME</S.SaleNavItem>
        <S.SaleNavItem href="/iphones">IPHONES</S.SaleNavItem>
        <S.SaleNavItem href="#">APPLE WATCH</S.SaleNavItem>
        <S.SaleNavItem href="#">AIRPODS</S.SaleNavItem>
        <S.SaleNavItem href="/login">LOGIN</S.SaleNavItem>
        <S.SaleNavItem href="/signin">CADASTRO</S.SaleNavItem>
      </S.SaleNav>
  </S.SaleHeader>
  );
};

export default HeaderLogin;
