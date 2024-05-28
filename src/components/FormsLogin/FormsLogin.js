// import React, { useState } from "react";
// import * as S from "../../App.styles";
// import * as B from "./style";

// const FormsLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <S.Form>
//       <B.p>Já sou cadastrado!</B.p>
//       <S.Input
//         type="email"
//         value={email}
//         placeholder="Digite seu e-mail"
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <S.Input
//         type="password"
//         value={password}
//         placeholder="Digite sua senha"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <S.Button>Entrar</S.Button>
//     </S.Form>
//   );
// };

// export default FormsLogin;

import React, { useState } from "react";
import * as S from "../../App.styles";
import * as B from "./style";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";  // Ajuste o caminho conforme o local do seu arquivo de configuração do Firebase
import 'firebase/app'

const FormsLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const handleLogin = async (e) => {

  e.preventDefault();
  console.log("Evento de login chamado");  // Confirme que a função é chamada
  console.log("Email:", email, "Senha:", password);  // Verifique os valores de entrada
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Usuário logado com sucesso:", userCredential.user);
  } catch (error) {
    console.error("Erro ao fazer login:", error.message);
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
