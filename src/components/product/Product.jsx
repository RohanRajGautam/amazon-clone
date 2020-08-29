import React from 'react';
import './Product.css';

import Rating from '@material-ui/lab/Rating';

const Product = ({ id, price, title, image, rating }) => {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          <Rating value={rating} size='small' readOnly />
        </div>
      </div>
      <img src={image} alt='product_image' />
      <button>Add to basket</button>
    </div>
  );
};

export default Product;
