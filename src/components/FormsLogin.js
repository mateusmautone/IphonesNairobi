import React, { useState } from "react";
import * as S from '../App.styles';

const FormsLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <S.Form>
            <label>Já sou cadastrado!</label>
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