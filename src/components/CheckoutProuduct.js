import React from 'react';
import star from "../images/icons/star.png";
import "./CheckoutProduct.css";
import { useAuth } from '../context/GlobalState';
const CheckoutProuduct = ({id, title, price, rating, image}) => {
  const { dispatch } = useAuth();
  const removerfomebasket = () =>{
    dispatch({
      type: "REMOVE_FORM_BASSKET",
      id: id
    })
  }
  return (
    <div className='checkoutProduct' key={id}>
      <img className='checkoutProduct-image' src={image}/>
      <div className='checkoutProduct-info'>
        <p className='checkoutProduct-title'>{title}</p>
        <p className='checkoutProduct-price'><small>$</small><strong>{price}</strong></p>
        <div className='checkoutProduct-rating'>
        {
            Array(rating).fill().map((item, index) => (
                <p key={index}>
                    <img src={star} alt='star'/>
                </p>
            ))
        }
        </div>
        <button onClick={removerfomebasket}>Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProuduct
