import React from 'react';
import star from "../images/icons/star.png";
import "./Order.css";
const Order = ({id, title, price, rating, image}) => {
  return (
    <div className='order'>
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
      </div>
    </div>
    </div>
  )
}

export default Order