// styles.js
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  padding: 20px;
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  background-color: red;
  width: 400px;
  height: auto;
  border-radius: 50px;
  background: #d9d9d9;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  font-family: arial;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
export const Menu = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  margin-bottom: -50px;
`;
export const Label = styled.label`
  margin-bottom: 10px;
`;
export const StyledSelect = styled.select`
    padding: 8px 16px;
    border-radius: 8px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    color: #333;
    cursor: pointer;

    &:hover {
        background-color: #e9e9e9;
    }

    &:focus {
        outline: none;
        border-color: #0056b3;
        box-shadow: 0 0 0 2px rgba(0, 86, 179, 0.25);
    }
`;
export const Input = styled.input`
    font-family: Arial, Helvetica, sans-serif;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
`;

export const TextArea = styled.textarea`
    font-family: Arial, Helvetica, sans-serif;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  height: 100px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;
