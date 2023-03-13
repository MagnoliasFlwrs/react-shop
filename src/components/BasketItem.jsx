import React, { useContext } from 'react'
import { ShopContext } from '../context';

export default function BasketItem(props) {
    const {mainId, displayName , regularPrice , quantity } = props;

    const {removeFromBasket = Function.prototype  , minusQuantity = Function.prototype  , plusQuantity = Function.prototype } = useContext(ShopContext)

  return (
    <li className="collection-item">{displayName}
     <i className="material-icons bsk" onClick={()=> minusQuantity(mainId)}>remove</i>
      {quantity}
     <i className="material-icons bsk" onClick={()=> plusQuantity(mainId)}>add</i>
      = {regularPrice * quantity}
        <span  className="secondary-content" onClick={() => removeFromBasket(mainId)}>
          <i className="material-icons basket-delete">clear</i>
          </span>
     </li>
  )
}
