import React, { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { Container, Main, Button } from './style';
import HeaderLogin from "../HeaderLogin/HeaderLogin";
import Footer from '../Footer/Footer';
import { useParams, useNavigate } from 'react-router-dom';

const ProductPage2 = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const db = getFirestore();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      const productRef = doc(db, "Fones", id);
      const docSnap = await getDoc(productRef);

      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id, db]);

  const handleBuyClick = () => {
    // Redireciona para a página de compra
    navigate(`/compra/${id}`);
  };

  return (
    <Container>
      <HeaderLogin />
      <Main>
        {product ? (
          <>
            <div className='box-img'>
              <img src={product.ImagemUrl} alt={product.Modelo || "Produto"} />
            </div>
            <div className='product-info'>
              <h1>{product.Modelo}</h1>
              <p>{product.Preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
              <span>{product.Descricao}</span> 
              <Button onClick={handleBuyClick}>Comprar</Button>
            </div>
          </>
        ) : (
          <p>Carregando...</p>
        )}
      </Main>
      <Footer />
    </Container>
  );
};

export default ProductPage2;
