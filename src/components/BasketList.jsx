import React from 'react'
import BasketItem from './BasketItem'

export default function BasketList(props) {
    const {order = [] , handleBasketShow=Function.prototype , removeFromBasket=Function.prototype , minusQuantity=Function.prototype , plusQuantity=Function.prototype} = props;

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
                <BasketItem key={item.mainId} {...item} removeFromBasket={removeFromBasket} minusQuantity={minusQuantity} plusQuantity={plusQuantity} />
            )) : <li className="collection-item">Корзина пуста</li>

        }
        <li className="collection-item active">Общая стоимость: {totalPrice}</li>
      </ul>
  )
}
