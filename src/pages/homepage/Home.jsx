import React from 'react';
import './Home.css';

import Product from '../../components/product/Product';

const Home = () => {
  return (
    <div className='home'>
      <img
        className='home__image'
        src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg'
        alt='banner'
      />

      {/* Product id, title, rating, image */}
      <div className='home__row'>
        <Product
          id='1'
          title='Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage)'
          price={642}
          rating={4.5}
          image='https://images-na.ssl-images-amazon.com/images/I/716NEN4UVXL._AC_SX466_.jpg'
        />
        <Product
          id='2'
          title='New Apple iPad Pro (12.9-inch, Wi-Fi + Cellular, 1TB)'
          price={(1, 642)}
          rating={5}
          image='https://m.media-amazon.com/images/I/81Pi4nhjlwL._AC_UY218_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='3'
          title='Apple Watch Series 3 (GPS, 38mm)'
          price={299}
          rating={4}
          image='https://m.media-amazon.com/images/I/71vCuRn4CkL._AC_UY218_.jpg'
        />
        <Product
          id='4'
          title='Realme X2 Pro 6.5" 256GB 8GB RAM'
          price={299}
          rating={4.5}
          image='https://m.media-amazon.com/images/I/61HYxH5xZ7L._AC_UY218_.jpg'
        />
        <Product
          id='5'
          title='Apple iPhone XR, 64GB, Black '
          price={999}
          rating={4.5}
          image='https://m.media-amazon.com/images/I/81FyKX6ml6L._AC_UY218_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='6'
          title='Samsung CJ89 43" Curved UltraWide 3840 X 1200 Resolution 120Hz Monitor '
          price={499}
          rating={4.5}
          image='https://images-na.ssl-images-amazon.com/images/I/81v90JtbImL._AC_SL1500_.jpg'
        />
      </div>
      {/* Product */}
    </div>
  );
};

export default Home;
