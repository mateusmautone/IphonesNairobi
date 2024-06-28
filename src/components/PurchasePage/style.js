// style.js
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 800px;
  margin: 30px auto;
  background: #fff;
  box-shadow: 0 2px 15px rgba(0,0,0,0.1);
`;

export const ProductImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const ProductInfo = styled.div`
  text-align: center;
`;

export const Heading = styled.h1`
  font-size: 24px;
  color: #333;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #666;
  margin: 10px 0;
`;

export const Price = styled.span`
  font-size: 20px;
  color: #28a745;
  font-weight: bold;
`;

export const QuantityInput = styled.input`
  width: 50px;
  padding: 8px;
  font-size: 16px;
  margin: 10px;
  border: 1px solid #ccc;
`;

export const BuyButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
