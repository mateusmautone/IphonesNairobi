import React from "react";
import * as S from "../App.styles";
import HeaderLogin from "../components/HeaderLogin/HeaderLogin";
import FormsLogin from "../components/FormsLogin/FormsLogin";
import FormsRegister from "../components/FormsRegister/FormsRegister";

const SignIn = () => {
  return (
    <S.ContainerLogin>
      <HeaderLogin />
      <S.FormsContainer>
        <FormsLogin />
        <FormsRegister />
      </S.FormsContainer>
    </S.ContainerLogin>
  );
};

export default SignIn;
