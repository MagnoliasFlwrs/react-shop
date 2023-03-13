import React, { useContext } from 'react'
import { ShopContext } from '../context';

export default function Cart() {
  const {order ,  handleBasketShow = Function.prototype} =  useContext(ShopContext);
  return (
    <div className='cart deep-purple darken-1 white-text' onClick={handleBasketShow}>
        <i className="material-icons">add_shopping_cart</i>
        {order.length ? <span className='cart-quantity'>{order.length}</span> : 0}
    </div>
  )
}
