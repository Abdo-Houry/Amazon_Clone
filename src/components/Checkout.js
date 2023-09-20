import React from 'react';
import checkout from "../images/checkoutAd.jpg";
import { useAuth } from '../context/GlobalState';
import CheckoutProuduct from './CheckoutProuduct';
import "./Checkout.css";
import Subtotal from './Subtotal';
const Checkout = () => {
    const {basket} = useAuth();
  return (
    <div className='checkout'>
      <div className='checkout-left'>
        <img className='checkout-ad' src={checkout}/>
        <div>
            <h3>Hello, {localStorage.getItem("email")?`${localStorage.getItem("email")}@gmail.com` : "No User"}</h3>
            <h2 className='checkout-title'>Your Shopping Basket</h2>
            {basket.length > 0 ? (
              basket.map((item, i) => (
                <CheckoutProuduct key={i}
                id={item.id} 
                title={item.title} 
                image={item.image} 
                price={item.price} 
                rating={item.rating} 
                />
            ))
            ) : (
              <p className='no-product'>
                You have no items in your. To buy one or more
                items, click "Add to basket".
              </p>
            )}
        </div>
      </div>
      <div className='checkout-right'>
          <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
