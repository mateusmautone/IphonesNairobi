import styled from "styled-components";

export const HeaderLogin = styled.header`
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10%;
    width: 100%;
`;

export const Title = styled.h1`
    color: white;
    padding-left: 100px;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const FormsContainer = styled.div`
    display: flex;
    justify-content: center; /* Centralizar horizontalmente */
    align-items: center; /* Centralizar verticalmente */
    height: 90%; /* Altura restante da viewport */
`;

export const FormsLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px; /* Largura do formulário */
    border-radius: 5px;
    padding: 20px;
    
`;

export const Subtitle = styled.div`
    color: white;
    display: flex; 
    align-items: center; 
    gap: 20px; 
    padding-right: 100px;
    font-size: 20px;
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
`;

export const ButtonWrapper = styled.div`
    margin-top: 20px;
    text-align: center; /* Centralizar o conteúdo do botão */
    
    .login-button {
        width: 200px;
        background-color: black;
        color: white;
        border-radius: 15px;
        height: 35px
    }
    
`;

export const Icon = styled.i`
    color: black; /* Alterado para preto para melhor visibilidade */
    font-size: 2.0rem;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column; /* Para alinhar os itens verticalmente */
    justify-content: center; /* Centralizar horizontalmente */
    align-items: center; /* Centralizar verticalmente */
    height: 100vh; /* 100% da altura da viewport */
    
`;
