import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselPage = () => {
  return ( 
    <Carousel autoPlay interval="5000" transitionTime="5000" infiniteLoop>
      <div>
        <img src={require('../img/Fondo1.jpg')} alt=" "/>
        <p style={{ fontSize: 20 }} className="legend">Bicicletas</p>
      </div>
      <div>
        <img src={require('../img/Fondo2.jpg')} alt=""/>
        <p style={{ fontSize: 20 }} className="legend">Accesorios</p>
      </div>
      <div>
        <img src={require('../img/Fondo3.jpg')} alt= " "/>
        <p style={{ fontSize: 20 }} className="legend">Indumentaria</p>
      </div>
    </Carousel>
  );
};

export default CarouselPage;