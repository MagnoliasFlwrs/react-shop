export function reducer(state , {type, payload}) {
    switch(type) {
        case 'SET_GOODS' :
        return {
            ...state,
            goods: payload || [],
            loading:  false,
        }
        case 'CLOSE_ALERT' :
            return {
                ...state,
                alertName : '' ,
            }
        case 'REMOVE_FROM_BASKET' :
            return {
                ...state,
                order: state.order.filter(el => el.mainId !== payload.id),
            }
        case 'ADD_TO_BASKET' :
             {
                const itemIndex = state.order.findIndex(orderItem => orderItem.mainId === payload.mainId );
                let newOrder = null
                    if (itemIndex < 0) {
                        const newItem = {
                            ...payload,
                            quantity: 1,
                        }
                        newOrder = [...state.order , newItem]
                    } else {
                        newOrder = state.order.map((orderItem, index) => {
                            if (index === itemIndex) {
                                return {
                                    ...orderItem,
                                    quantity: orderItem.quantity + 1
                                }
                            } else {
                                return orderItem;
                            }
                        })
                    }
                    return {
                        ...state,
                        order: newOrder,
                        alertName : payload.displayName,
                    }
            }
        case 'HANDLE_BASKET_SHOW' :
            return {
                ...state,
                isBasketShow : !state.isBasketShow,
            }
        case 'MINUS_QUANTITY' :
            return {
                ...state,
                order: state.order.map(el => {
                    if (el.mainId === payload.id) {
                        const newQuan = el.quantity - 1;
                        return {
                            ...el,
                            quantity: newQuan >= 0 ? newQuan : 0,
                        }
                    } else {
                        return el;
                    }
                }),
            }
        case 'PLUS_QUANTITY' :
            return {
                ...state ,
                order: state.order.map(el => {
                    if (el.mainId === payload.id) {
                        const newQuan = el.quantity + 1;
                        return {
                            ...el,
                            quantity: newQuan ,
                        }
                    } else {
                        return el;
                    }

                }),
            }
        default:
            return state;
    }
}