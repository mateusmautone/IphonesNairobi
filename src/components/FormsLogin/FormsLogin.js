import React, { useState } from "react";
import * as S from "../../App.styles";
import * as B from "./style";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useNavigate } from 'react-router-dom';

const FormsLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Estado para mensagem de erro
  const navigate = useNavigate(); // Hook para navegação

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Usuário logado com sucesso:", userCredential.user);
      navigate('/'); // Redireciona para a página principal
    } catch (error) {
      console.error("Erro ao fazer login:", error.message);
      setErrorMessage("Login inválido. Por favor, tente novamente."); // Define a mensagem de erro
    }
  };

  return (
    <S.Form onSubmit={handleLogin}>
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
      <S.Button type="submit">Entrar</S.Button>
    </S.Form>
  );
};

export default FormsLogin;
