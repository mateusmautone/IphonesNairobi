import styled from 'styled-components';

// Estilos para a página de login
export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 60px;
  height: 100vh;
  background-color: #ffffff;
`;

export const HeaderLogin = styled.header`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
  height: 60px;
`;

export const Title = styled.h1`
  color: white;
  font-size: 24px;
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
  width: 100%;
  margin-top: 20px;
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

// Estilos para a página de vendas
export const SalePageContainer = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
`;

export const SaleHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: white;
  padding: 40px 0;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

export const SaleNav = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const SaleNavItem = styled.a`
  color: white;
  text-decoration: none;
  padding: 0 20px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const SaleTitle = styled.h1`
  font-size: 36px;
  margin: 0 0 20px;
`;

export const MainBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px 20px;
  background-color: white;
  color: black;
  margin-top: 100px;
`;

export const BannerTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 10px;
`;

export const BannerSubtitle = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const BannerButton = styled.button`
  background-color: green;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: darkgreen;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Product = styled.div`
  margin: 0 15px;
  text-align: center;
`;

export const ProductImage = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 10px;
`;

export const ProductButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: gray;
  }
`;
