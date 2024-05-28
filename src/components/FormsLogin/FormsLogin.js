import React, { useState } from "react";
import * as S from "../../App.styles";
import * as B from "./style";

const FormsLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <S.Form>
      <B.p>Já sou cadastrado!</B.p>
      <S.Input
        type="email"
        value={email}
        placeholder="Digite seu e-mail"
        onChange={(e) => setEmail(e.target.value)}
      />
      <S.Input
        type="password"
        value={password}
        placeholder="Digite sua senha"
        onChange={(e) => setPassword(e.target.value)}
      />
      <S.Button>Entrar</S.Button>
    </S.Form>
  );
};

export default FormsLogin;
