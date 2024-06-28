import styled from 'styled-components';

export const Container = styled.div`
display: block;
/* background-color: red; */
`

export const Button = styled.button`
  display: block;
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  &:hover {
    background-color: #0056b3;
  }
`;

export const Main = styled.main`
display: flex;
justify-content: center;
/* align-items: center; */
flex-direction: row;
/* background-color: blue; */
height: 100vh;
margin: 80px 200px 80px 200px;
padding-top: 100px;
font-family: Arial, Helvetica, sans-serif;
img{
    width: 400px;
    height: auto;
    max-height: 500px;
}
h1{
    text-align: start;
    margin-left: 00px;
    font-family: Arial;
    text-transform: uppercase;
}
.box-img{
    /* background-color: red; */
    width: 500px;
    height: 500px;
}
.product-info{
    /* background-color: yellow; */
    border-right: 4px solid black;
    width: 500px;
    height: 500px;
    text-align: start;
    p{
    color: green;
    font-weight: 600;
    font-size: 1.3rem;
}
span{
    max-width: 500px;
    word-wrap: break-word;
}
}

`
export const Product = styled.div`
/* background-color: blue; */
`