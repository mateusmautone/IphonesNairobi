// PurchasePage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { Container, ProductImage, ProductInfo, Heading, Description, Price, QuantityInput, BuyButton } from './style';

const PurchasePage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // Garante que quantity é um número
  const db = getFirestore();

  useEffect(() => {
    const fetchProduct = async () => {
      const productRef = doc(db, "Celulares", id);
      const docSnap = await getDoc(productRef);

      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchProduct();
  }, [id, db]); // Adiciona db às dependências

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10); // Converte o valor para número
    setQuantity(newQuantity > 0 ? newQuantity : 1); // Garante que a quantidade não seja menor que 1
  };

  const handlePurchase = () => {
    if (product) { // Verifica se product não é null
      alert(`Purchased ${quantity} of ${product.name}`);
    } else {
      alert("Product is not loaded yet.");
    }
  };

  return (
    <Container>
      {product ? (
        <>
          <ProductImage src={product.imageUrl || 'placeholder.jpg'} alt={product.name} />
          <ProductInfo>
            <Heading>{product.name}</Heading>
            <Description>{product.description}</Description>
            <Price>{`$${product.price}`}</Price>
            <div>
              <label htmlFor="quantity">Quantity:</label>
              <QuantityInput type="number" id="quantity" value={quantity} onChange={handleQuantityChange} min="1" />
            </div>
            <BuyButton onClick={handlePurchase}>Buy Now</BuyButton>
          </ProductInfo>
        </>
      ) : (
        <p>Loading product details...</p>
      )}
    </Container>
  );
};

export default PurchasePage;
