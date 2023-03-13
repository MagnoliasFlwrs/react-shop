import React, { useEffect, useState } from 'react'
import {API_KEY , API_URL} from '../config'
import Alert from './Alert';
import BasketList from './BasketList';
import Cart from './Cart';
import GoodsList from './GoodsList';
import Preloader from './Preloader';

export default function Shop() {
    const [goods , setGoods] = useState([]);
    const [loading, setLoading] =useState(true);
    const [order , setOrder] = useState([]);
    const [isBasketShow, setisBasketShow] =useState(false);
    const [alertName , setalertName] = useState('');


    const addToBasket = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.mainId === item.mainId )
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem;
                }
            })
            setOrder(newOrder);
            setalertName(item.displayName)
        }

    };
    const removeFromBasket = (mainId)=> {
        const newOrder = order.filter(el => el.mainId !== mainId);
        setOrder(newOrder)
    }
    const handleBasketShow =()=> {
        setisBasketShow(!isBasketShow)
    }

    const minusQuantity= (itemId)  => {
        const newOrder = order.map(el => {
            if (el.mainId === itemId) {
                const newQuan = el.quantity - 1;
                return {
                    ...el,
                    quantity: newQuan >= 0 ? newQuan : 0,
                }
            } else {
                return el;
            }

        });
        setOrder(newOrder)
    }
    const plusQuantity= (itemId) =>{
        const newOrder = order.map(el => {
            if (el.mainId === itemId) {
                const newQuan = el.quantity + 1;
                return {
                    ...el,
                    quantity: newQuan ,
                }
            } else {
                return el;
            }

        });
        setOrder(newOrder)
    }
    const closeAlertName = () => {
        setalertName('')
    }
    useEffect(function getGoods() {
        fetch(API_URL , {
            headers : {
                'Authorization' : 'a667b4af-5f7b0ade-9463e47d-d9f60bd3',
            },
        }).then(res => res.json()).then(data => {
            data.shop && setGoods(data.shop);
            setLoading(false);
        })
    }, [])
  return (
    <main className='container content'>
        <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
        {
            loading ? <Preloader/> : <GoodsList goods={goods} addToBasket={addToBasket} />
        }
        {
            isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow} removeFromBasket={removeFromBasket}
            plusQuantity={plusQuantity} minusQuantity={minusQuantity}/>
        }
        {
            alertName && <Alert displayName={alertName} closeAlertName={closeAlertName} />
        }

    </main>
  )
}
