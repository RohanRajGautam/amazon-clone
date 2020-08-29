import React from 'react';
import './Product.css';

import Rating from '@material-ui/lab/Rating';
import { useStateValue } from '../../StateProvider';

const Product = ({ id, price, title, image, rating }) => {
  const [, dispatch] = useStateValue();

  const addToBasket = () => {
    //add item to basket
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

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
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
