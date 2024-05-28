import React from "react";
import * as S from "../App.styles";
import "primeicons/primeicons.css";
// import { useState } from "react";
import HeaderLogin from "../components/HeaderLogin/HeaderLogin";
import FormsLogin from "../components/FormsLogin/FormsLogin";
import Logo from '../photos/logo'

const Login = () => {
  return (
    <S.ContainerLogin>
      <HeaderLogin />
      <S.FormsContainer>
        <Logo/>
        <FormsLogin />
      </S.FormsContainer>
    </S.ContainerLogin>
  );
};

export default Login;
