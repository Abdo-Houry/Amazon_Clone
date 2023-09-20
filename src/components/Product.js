import React from 'react';
import star from "../images/icons/star.png";
import "./Product.css";
import { useAuth } from '../context/GlobalState';
const Product = ({id, title, price, image, rating}) => {
    const {dispatch} = useAuth();
    const addtoBasket = () =>{
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                price: price,
                image: image,
                rating: rating
            },
        })
    }
  return (
    <div className='product'>
      <div className='product-info'>
        <p>{title}</p>
        <p className='product-price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
      </div>
      <div className='product-rating'>
        {
            Array(rating).fill().map((item, index) => (
                <p key={index}>
                    <img src={star} alt='star'/>
                </p>
            ))
        }
      </div>
      <img src={image} alt='product-imge'/>
      <button onClick={addtoBasket}>Add To Basket</button>
    </div>
  )
}

export default Product
