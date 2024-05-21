import React from 'react';
import * as S from '../App.styles';


const Home = () => {
  return (
    <S.SalePageContainer>
      <S.SaleHeader>
        <S.SaleTitle>Iphones do Nairobi</S.SaleTitle> {/* Título agora acima do Nav */}
        <S.SaleNav>
          <S.SaleNavItem>IPHONES</S.SaleNavItem>
          <S.SaleNavItem>APPLE WATCH</S.SaleNavItem>
          <S.SaleNavItem>AIRPODS</S.SaleNavItem>
        </S.SaleNav>
      </S.SaleHeader>
      <S.MainBanner>
        <S.BannerTitle>Quais são os Iphones ideais para você?</S.BannerTitle>
        <S.BannerSubtitle>Seus aparelhos conectados como se fosse mágica.</S.BannerSubtitle>
        <S.BannerButton>Aproveite</S.BannerButton>
      </S.MainBanner>
      <S.ProductsContainer>
        <S.Product>
          <S.ProductImage src="iphone.png" alt="iPhone 15 Pro" />
          <S.ProductButton>Comprar</S.ProductButton>
        </S.Product>
        <S.Product>
          <S.ProductImage src="../photos/airpods" alt="Watch Series 9" />
          <S.ProductButton>Comprar</S.ProductButton>
        </S.Product>
        <S.Product>
          <S.ProductImage src="airpods.png" alt="AirPods (2ª geração)" />
          <S.ProductButton>Comprar</S.ProductButton>
        </S.Product>
      </S.ProductsContainer>
    </S.SalePageContainer>
  );
}

export default Home;
