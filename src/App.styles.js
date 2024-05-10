import styled from "styled-components";

export const ContainerLogin = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;  // Inicia o conteúdo logo após o cabeçalho
align-items: center;
padding-top: 60px;  // Adiciona espaço no topo para compensar a altura do cabeçalho
height: 100vh;  // Mantém a altura total da viewport
background-color: #ffffff;  // Fundo branco para todo o container da página
`;

export const HeaderLogin = styled.header`
background-color: black;
color: white;
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 10%;  // Ajustar conforme necessário
width: 100%;  // Usa a largura total da viewport
position: fixed;  // Fixa o cabeçalho no topo da página
top: 0;  // Garante que o cabeçalho fique no topo
left: 0;  // Alinha à esquerda
z-index: 1000;  // Garante que o cabeçalho fique sobre outros elementos
box-sizing: border-box;  // Assegura que o padding não afete a largura total
height: 60px;  // Define uma altura fixa para o cabeçalho
`;

export const Title = styled.h1`
    color: white;
    font-size: 24px;  // Ajuste conforme necessário para o tamanho do texto
    margin: 0;
`;

export const Subtitle = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
`;

export const FormsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;  // Ajusta a largura para 100% para usar todo o espaço disponível
    margin-top: 20px;  // Adiciona espaço vertical entre o header e os formulários
`;

export const Form = styled.div`
    background-color: #FFFFFF;
    padding: 40px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    border-radius: 8px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const Button = styled.button`
    width: 100%;
    padding: 10px 20px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
`;
