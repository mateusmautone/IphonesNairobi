import React from "react";
import * as S from "../App.styles";
import HeaderLogin from "../components/HeaderLogin/HeaderLogin";
import FormsRegister from "../components/FormsRegister/FormsRegister";
import Logo from '../photos/logo'

const SignIn = () => {
  return (
    <S.ContainerLogin>
      <HeaderLogin />
      <S.FormsContainer>
        <Logo />
        <FormsRegister />
      </S.FormsContainer>
    </S.ContainerLogin>
  );
};

export default SignIn;
