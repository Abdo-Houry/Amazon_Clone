import React from 'react'
import { useAuth } from '../context/GlobalState';
import { getBasketTotal } from '../context/ReducerFunctions';
import { useNavigate } from 'react-router-dom';
import "./Subtotal.css";
const Subtotal = () => {
    const {basket} = useAuth();
    const navigate = useNavigate();
  return (
    <div className='subtotal'>
      <p>
        Subtotla ({basket.length} items) : <strong>price $ </strong> {getBasketTotal(basket)}
      </p>
      <small className='subtotal__gift'>
        <input type='checkbox'/> This order contains a gift
      </small>
      <button onClick={()=> navigate("/payment")}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
