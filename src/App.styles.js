import styled from 'styled-components';

// Estilos para a página de login
export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderLogin = styled.header`
  display: flex;
  align-items: center;
  background-color: black;
  justify-content: space-between;
  color: white;
  padding: 20px 10%;
  width: 100vw;
  position: fixed;
  z-index: 1000;
  box-sizing: border-box;
  height: 60px;
  nav{
    /* margin: 0 auto; */
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 24px;
  margin: 0;
  left: 0;
  top: 0;
`;

export const Subtitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  right: 0;
`;

export const FormsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 150px;
  flex-flow: column;
`;

export const Form = styled.form`
  background-color: #FFFFFF;
  padding: 40px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 8px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const label = styled.input`
  margin-bottom: 30px;
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
// Estilos para a página de vendas
export const SalePageContainer = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
`;

export const SaleHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  padding: 10px 5%;
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
`;

export const SaleNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const SaleNavItem = styled.a`
  color: white;
  text-decoration: none;
  padding: 0 20px;
  cursor: pointer;
  &:hover {
    color: lightgray;
  }
`;

export const SaleTitle = styled.h1`
  margin: 0;
  font-size: 24px;
`;

export const ContentSection = styled.div`
  padding-top: 70px; // Space to avoid overlapping with the fixed header
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* height: 100vh; */
`;

export const MainBanner = styled.div`
  width: 100%;
  padding-top: 0px; // Spacing adjusted to align with your header height
  text-align: center;
`;

export const BannerTitle = styled.h2`
/* box-shadow: 7px 10px 13px 2px rgba(0, 0, 0, 0.1); */
  font-size: 24px;
`;

export const BannerSubtitle = styled.p`
  font-size: 16px;
`;

export const BannerButton = styled.button`
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: darkgreen;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  /* background-color: red; */
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
  flex-direction: column;
`;

export const Product = styled.div`
  text-align: center;
`;

export const ProductImage = styled.img`
  width: 160px;
  height: auto;
`;

export const ProductButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
`;



// Styled components
export const PageContainer = styled.div`
  background-color: #f4f4f4;
  min-height: 100vh;
  padding: 20px;
`;

export const HeaderIphone = styled.div`
  background-color: black;
  color: white;
  padding: 20px;
  text-align: center;
  font-size: 24px;
`;

export const ProductsContainerIphone = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const ProductCard = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  background-color: white;
`;

export const ProductImageIphone = styled.img`
  width: 100%;
`;

export const ProductPriceIphone = styled.div`
  font-size: 20px;
  color: #333;
  margin-top: 5px;
`;

export const BuyButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
`;
