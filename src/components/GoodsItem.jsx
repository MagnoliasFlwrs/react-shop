import React, { useContext } from 'react'
import { ShopContext } from '../context';

export default function GoodsItem(props) {

    const {
        mainId,
        displayName,
        displayDescription,
        price: {regularPrice},
        displayAssets,
    } = props;

    const {addToBasket } = useContext(ShopContext)
  return (
    <div className="card" id={mainId}>
        <div className="card-image">
          <img src={displayAssets[0].full_background} alt={displayName}/>

        </div>
        <div className="card-content">
        <span className="card-title">{displayName}</span>
          <p>{displayDescription}</p>

        </div>
        <div className="card-action">
          <button className='btn ' onClick={() => addToBasket({mainId, displayName , regularPrice})}>Купить</button>
          <span className='right'>{regularPrice}</span>
        </div>
      </div>
  )
}
