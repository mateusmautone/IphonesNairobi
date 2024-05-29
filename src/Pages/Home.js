import React from 'react';
import * as S from '../App.styles'; // Make sure this path matches your actual file structure
import EventFeed from '../components/EventFeed/Eventfeed';
import EventFeedPods from '../components/EventFeed/EventfeedPods';
import EventFeedRelogio from '../components/EventFeed/EventfeedRelogio';
import Footer from '../components/Footer/Footer';
import AutoPlayCarousel from '../components/Slider/Slider';
import HeaderLogin from "../components/HeaderLogin/HeaderLogin";


const Home = () => {
  return (
    <S.SalePageContainer>
      <HeaderLogin></HeaderLogin>
      <AutoPlayCarousel></AutoPlayCarousel>
      
      <S.ContentSection>
        <S.MainBanner>
          <S.BannerTitle>Quais são os Iphones ideais para você?</S.BannerTitle>
          <S.BannerSubtitle>
            Seus aparelhos conectados como se fosse mágica.
          </S.BannerSubtitle>
          <S.BannerButton>Aproveite</S.BannerButton>
        </S.MainBanner>
        <S.ProductsContainer>

        <S.BannerTitle> iPhone</S.BannerTitle>
          <EventFeed></EventFeed>

          <S.BannerTitle>AirPods</S.BannerTitle>
          <EventFeedPods></EventFeedPods>

          <S.BannerTitle>Apple Watch</S.BannerTitle>
          <EventFeedRelogio></EventFeedRelogio>
        </S.ProductsContainer>
      </S.ContentSection>
      <Footer></Footer>
    </S.SalePageContainer>
  );
};

export default Home;
