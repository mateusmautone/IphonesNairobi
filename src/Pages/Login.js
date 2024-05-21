import React from "react";
import * as S from "../App.styles";
import "primeicons/primeicons.css";
import { useState } from "react";
import HeaderLogin from "../components/HeaderLogin/HeaderLogin";
import FormsLogin from "../components/FormsLogin/FormsLogin";

const Login = () => {
  return (
    <S.ContainerLogin>
      <HeaderLogin />
      <S.FormsContainer>
        <FormsLogin />
      </S.FormsContainer>
    </S.ContainerLogin>
  );
};

export default Login;
