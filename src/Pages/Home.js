import React from 'react';
import * as S from '../App.styles'; // Make sure this path matches your actual file structure
import airpods from '../photos/airpods.png';
import iphone from '../photos/iphone.png';
import watch from '../photos/applewatch.png';

const Home = () => {
  return (
    <S.SalePageContainer>
      <S.SaleHeader>
        <S.SaleTitle>Iphones do Nairobi</S.SaleTitle>
        <S.SaleNav>
          <S.SaleNavItem href="/">HOME</S.SaleNavItem>
          <S.SaleNavItem href="/iphones">IPHONES</S.SaleNavItem>
          <S.SaleNavItem href="#">APPLE WATCH</S.SaleNavItem>
          <S.SaleNavItem href="#">AIRPODS</S.SaleNavItem>
          <S.SaleNavItem href="/login">LOGIN</S.SaleNavItem>
          <S.SaleNavItem href="/sigin">CADASTRO</S.SaleNavItem>
        </S.SaleNav>
      </S.SaleHeader>
      <S.ContentSection>
        <S.MainBanner>
          <S.BannerTitle>Quais são os Iphones ideais para você?</S.BannerTitle>
          <S.BannerSubtitle>Seus aparelhos conectados como se fosse mágica.</S.BannerSubtitle>
          <S.BannerButton>Aproveite</S.BannerButton>
        </S.MainBanner>
        <S.ProductsContainer>
          <S.Product>
            <S.ProductImage src={iphone} alt="iPhone 15 Pro" />
            <S.ProductButton>Comprar</S.ProductButton>
          </S.Product>
          <S.Product>
            <S.ProductImage src={watch} alt="Watch Series 9" />
            <S.ProductButton>Comprar</S.ProductButton>
          </S.Product>
          <S.Product>
            <S.ProductImage src={airpods} alt="AirPods (2ª geração)" />
            <S.ProductButton>Comprar</S.ProductButton>
          </S.Product>
        </S.ProductsContainer>
      </S.ContentSection>
    </S.SalePageContainer>
  );
}

export default Home;
