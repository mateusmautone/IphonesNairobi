import React from "react";
import * as S from '../App.styles';
import 'primeicons/primeicons.css';
import { useState } from "react";

const FormsLogin = () => {


    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');

    const handleChangeSenha = (event) => {
        setSenha(event.target.value);
    }

    const handleChangeNome = (event) => {
        setNome(event.target.value);
    }

    const handleClick = () => {
        console.log(senha + nome);
    }

    return(
        <S.FormsLogin>
                    <S.IconWrapper>
                        <i className="pi pi-envelope"></i>
                        <input type="text" value={nome} onChange={handleChangeNome} placeholder="Digite seu e-mail"></input>
                    </S.IconWrapper>
                    <S.IconWrapper>
                        <i className="pi pi-key"></i>
                        <input type="password" value={senha} onChange={handleChangeSenha} id="senha" placeholder="Digite sua senha"></input>
                    </S.IconWrapper>
                    <S.ButtonWrapper>
                        <button className="login-button" onClick={handleClick}>Entrar</button>
                    </S.ButtonWrapper>
                </S.FormsLogin>
    )
}

export default FormsLogin;