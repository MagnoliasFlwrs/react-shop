import React, { useContext, useEffect } from 'react'
import { API_URL} from '../config'
import { ShopContext } from '../context';
import Alert from './Alert';
import BasketList from './BasketList';
import Cart from './Cart';
import GoodsList from './GoodsList';
import Preloader from './Preloader';

export default function Shop() {
    const {loading , order , isBasketShow, alertName , setGoods} = useContext(ShopContext);

    useEffect(function getGoods() {
        fetch(API_URL , {
            headers : {
                'Authorization' : 'a667b4af-5f7b0ade-9463e47d-d9f60bd3',
            },
        }).then(res => res.json()).then(data => {
            setGoods(data.shop);
        })
    }, [])

  return (
    <main className='container content'>
        <Cart quantity={order.length} />
        {
            loading ? <Preloader/> : <GoodsList  />
        }
        {
            isBasketShow && <BasketList />
        }
        {
            alertName && <Alert  />
        }

    </main>
  )
}
