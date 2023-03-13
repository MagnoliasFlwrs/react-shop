import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context';

export default function Alert(props) {
    const {closeAlertName , alertName} =  useContext(ShopContext)

    useEffect(()=> {
        const timerId = setTimeout( closeAlertName , 3000 )
        return () => {
            clearTimeout(timerId)
        }
    }, [alertName])


  return (
    <div id='toast-container'>
        <div className="toast">{alertName} добавлен в корзину</div>
    </div>
  )
}
