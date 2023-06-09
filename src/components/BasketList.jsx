import React, { useContext } from 'react'
import { ShopContext } from '../context';
import BasketItem from './BasketItem'

export default function BasketList() {
    const { order = [] , handleBasketShow = Function.prototype } =  useContext(ShopContext)

    const totalPrice = order.reduce((sum,el)=> {
        return sum + el.regularPrice * el.quantity
    }, 0);
  return (
    <ul className="collection basket-list">
        <li className="collection-item active">Корзина
            <span  class="secondary-content closebtn" onClick={handleBasketShow}><i class="material-icons">clear</i></span>
        </li>
        {
            order.length ?
            order.map(item => (
                <BasketItem key={item.mainId} {...item} />
            )) : <li className="collection-item">Корзина пуста</li>

        }
        <li className="collection-item active">Общая стоимость: {totalPrice}</li>
      </ul>
  )
}
