import React, { useState } from "react";
import * as S from "../../App.styles";
import FormsRegister from "./style";


const FormsRegister = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <S.Form>
      <label>Esta é minha primeira compra!</label>
      <S.Input
        type="text"
        placeholder="Digite seu nome completo"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <S.Input
        type="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <S.Input
        type="password"
        placeholder="Digite sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <S.Button>Cadastre-se</S.Button>
    </S.Form>
  );
};

export default FormsRegister;
