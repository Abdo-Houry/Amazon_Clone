import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/GlobalState'
import CheckoutProuduct from './CheckoutProuduct';
import { getBasketTotal } from '../context/ReducerFunctions';
import "./Payment.css";
const Payment = () => {
  const {basket, dispatch} = useAuth();
  const navigate = useNavigate();
  const handelProducts = () => {
    navigate("/orders");
  }
  return (
    <div className='payment'>
      <div className='payment-container'>
        <h1>
          Checkout (<Link to="/checkout">{basket.length} items</Link>)
        </h1>
        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Delivery Adderss</h3>
          </div>
          <div className='payment-addrress'>
            <p>{window.localStorage.getItem("email")}@gmail.com</p>
            <p>Aleppo, Syria</p>
          </div>
        </div>
        <div className='payment-section mysction'>
          <div className='payment-title'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='payment-item s'>
          {basket.map((item) => (
            <CheckoutProuduct key={Math.random()}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          </div>
        </div>
        <div className='payment-section'>
          <h3>Payment Method</h3>
          <div className='payment-details'>
            <form>
              <div className='payment-priceContainer'>
                <h3>
                  Oreder Total <strong> $ {getBasketTotal(basket)}</strong> 
                </h3>
                <button onClick={handelProducts}>Buy Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
