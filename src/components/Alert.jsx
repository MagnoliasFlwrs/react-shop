import React, { useEffect } from 'react'

export default function Alert(props) {


    const {displayName = '' , closeAlertName=Function.prototype } = props;


    useEffect(()=> {
        const timerId = setTimeout( closeAlertName , 3000 )
        return () => {
            clearTimeout(timerId)
        }
    }, [displayName])


  return (
    <div id='toast-container'>
        <div className="toast">{displayName} добавлен в корзину</div>
    </div>
  )
}
