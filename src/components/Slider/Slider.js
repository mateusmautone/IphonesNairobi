import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import * as B from "./style";

import image1 from '../../photos/Banner_top_1_1920x.jpeg';
import image2 from '../../photos/Banner_top_2_1920x.jpeg';
import image3 from '../../photos/Banner_top_3_1920x.jpeg';

const AutoPlayCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,  // Troca a imagem a cada 2000 milissegundos (2 segundos)
    cssEase: "linear"
  };

  return (
    <Slider {...settings}>
      <div>
        <B.Foto src={image1} alt="Image 1" />
      </div>
      <div>
        <B.Foto src={image2} alt="Image 2" />
      </div>
      <div>
        <B.Foto src={image3} alt="Image 3" />
      </div>
    </Slider>
  );
};


export default AutoPlayCarousel;
