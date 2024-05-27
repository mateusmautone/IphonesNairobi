import * as S from "../App.styles";

import iphoneBlack from '../photos/iphoneblack.jpg';
import iphoneBlue from '../photos/iphoneblue.jpg';
import iphonePink from '../photos/iphonepink.png'

const Iphones = () => {
    const products = [
      { id: 1, name: 'iPhone Black', image: '', price: 'R$ 8.090,00' },
      { id: 2, name: 'iPhone White', image: 'path-to-your-white-iphone-image.jpg', price: 'R$ 7.190,00' },
      { id: 3, name: 'iPhone Blue', image: 'path-to-your-blue-iphone-image.jpg', price: 'R$ 4.790,00' }
    ];
  
    return (
      <S.PageContainer>
        <S.HeaderIphone>IPHONES DO NAIROBI</S.HeaderIphone>
        <S.ProductsContainerIphone>
          {products.map(product => (
            <S.ProductCard key={product.id}>
              <S.ProductImage src={product.image} alt={product.name} />
              <S.ProductPriceIphone>{product.price}</S.ProductPriceIphone>
              <S.BuyButton>Comprar</S.BuyButton>
            </S.ProductCard>
          ))}
        </S.ProductsContainerIphone>
      </S.PageContainer>
    );
  }
  
  export default Iphones;