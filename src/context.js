import { createContext, useReducer } from "react";
import { reducer } from "./reducer";


export const ShopContext = createContext();
const initialState = {
    goods : [],
    loading : true ,
    order : [],
    isBasketShow : true ,
    alertName : '' ,

}

export const ContextProvider = ( {children} ) => {
    const [value, dispatch] = useReducer(reducer , initialState);

    value.closeAlertName = () => {
        dispatch( { type: 'CLOSE_ALERT'})
    }
    value.removeFromBasket = (mainId) => {
        dispatch( { type: 'REMOVE_FROM_BASKET' , payload: {id: mainId}})
    }
    value.addToBasket = (item) => {
        dispatch( { type: 'ADD_TO_BASKET' , payload: item})
    }
    value.handleBasketShow = ()=> {
        dispatch({type: 'HANDLE_BASKET_SHOW'})
    }
    value.minusQuantity = (itemId) => {
        dispatch( { type :'MINUS_QUANTITY' , payload : {id: itemId}})
    }
    value.plusQuantity = (itemId) => {
        dispatch( { type :'PLUS_QUANTITY' , payload : {id: itemId}})
    }
    value.setGoods = (data) => {
        dispatch( { type: 'SET_GOODS', payload: data} )
    }
    return <ShopContext.Provider value={value} >
        {children}
    </ShopContext.Provider>
}