import React, { useState } from "react";
import * as S from "../../App.styles";
import * as B from "./style"; // Garanta que B.Error esteja sendo importado de './style'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useNavigate } from 'react-router-dom';

const FormsRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Estado para armazenar mensagens de erro
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Conta criada com sucesso:", userCredential.user);
      navigate('/'); // Redireciona para a página inicial após o sucesso
    } catch (error) {
      console.error("Erro ao criar conta:", error.message);
      setError("Falha ao registrar. " + (error.message || "Verifique os dados e tente novamente.")); // Configura a mensagem de erro para mostrar no frontend
    }
  };

  return (
    <S.Form onSubmit={handleRegister}>
      <B.p>Esta é minha primeira compra!</B.p>
      {error && <B.Error>Algo está errado!</B.Error>}
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
      <S.Button type="submit">Cadastre-se</S.Button>
    </S.Form>
  );
};

export default FormsRegister;
