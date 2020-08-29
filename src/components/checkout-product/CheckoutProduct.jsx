import React from 'react';
import './CheckoutProduct.css';

import { useStateValue } from '../../StateProvider';
import Rating from '@material-ui/lab/Rating';

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const [, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove item from basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id,
    });
  };

  return (
    <div className='checkoutProduct'>
      <img src={image} alt='item' className='checkoutProduct__image' />
      <div className='checkoutProduct__info'>
        <h3 className='checkoutProduct__title'>{title}</h3>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutProduct__rating'>
          <Rating value={rating} size='small' readOnly />
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
