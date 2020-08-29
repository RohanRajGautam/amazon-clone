import React from 'react';
import './Checkout.css';

import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../checkout-product/CheckoutProduct';
import Subtotal from '../subtotal/Subtotal';

const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._C8423492668_.jpg'
          alt='ad'
          className='checkout__ad'
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty.</h2>
            <p>
              Your Shopping Cart lives to serve. Give it purpose — fill it with
              books, CDs, DVDs, toys, electronics, and more.
            </p>
          </div>
        ) : (
          <div>
            <h2 className='checkout__title'>Your Shopping Basket</h2>

            {/* list of all checkout product */}
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className='checkout__right'>
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
