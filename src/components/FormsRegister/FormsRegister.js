import React, { useState } from "react";
import * as S from "../../App.styles";
import * as B from "./style";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config"; // Certifique-se de que este caminho está correto

const FormsRegister = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault(); // Impede o comportamento padrão do formulário de recarregar a página
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Conta criada com sucesso:", userCredential.user);
      // Aqui você pode adicionar código para lidar com o sucesso do cadastro, como redirecionar o usuário
    } catch (error) {
      console.error("Erro ao criar conta:", error.message);
      // Aqui você pode adicionar uma mensagem de erro para o usuário
    }
  };

  return (
    <S.Form onSubmit={handleRegister}>
      <B.p>Esta é minha primeira compra!</B.p>
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
      <S.Button type="submit">Cadastre-se</S.Button>
    </S.Form>
  );
};

export default FormsRegister;
