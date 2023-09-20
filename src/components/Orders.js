import React from 'react';
import { useAuth } from '../context/GlobalState';
import { getBasketTotal } from '../context/ReducerFunctions';
import Order from './Order';
import "./Orders.css";
const Orders = () => {
    const {basket} = useAuth();
  return (
    <div className='orders'>
        <h1>Your Orders</h1>
        <div className='orders-order'>
        {basket.map((item) => (
              <Order key={Math.random()}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              />
        ))}
        </div>
        <div className='payment-section'>
            <h3 className='order-total'>
              Oreder Total <strong> $ {getBasketTotal(basket)}</strong> 
            </h3>
        </div>
    </div>
  )
}

export default Orders

// {basket.map((item) => (
//     // <CheckoutProuduct key={Math.random()}
//     // id={item.id}
//     // title={item.title}
//     // image={item.image}
//     // price={item.price}
//     // rating={item.rating}
//     // />
//     <div key={Math.random()}>

//     </div>
// ))}