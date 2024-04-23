import React from "react";
import * as S from '../App.styles';
import 'primeicons/primeicons.css';
import { useState } from "react";

const Login = () => {

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

    return (
        <S.Container>
            <S.HeaderLogin>
                <S.Title>Iphones do Nairobi</S.Title>
                <S.Subtitle>
                    <i className="pi pi-lock" style={{ color: 'white', fontSize: '2.0rem' }}></i>
                    100% Seguro
                </S.Subtitle>
            </S.HeaderLogin>
            <S.FormsContainer>
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
            </S.FormsContainer>
        </S.Container>
    )
}

export default Login;
