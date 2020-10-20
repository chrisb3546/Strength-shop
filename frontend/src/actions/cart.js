export const setShoppingCart = cart =>{
    debugger
    return  dispatch => {
        return dispatch ({
        type: "SET_SHOPPING_CART",
        payload: cart
        })
       
   }
}

export const addItemToCart = item => {
    return dispatch => {
        return dispatch({
            type: "ADD_ITEM_TO_CART",
            payload: item
        })
    }
}

export const removeItemFromCart = item => {
    debugger
    
    return dispatch => {
        return dispatch({
            type: "REMOVE_ITEM_FROM_CART",
            payload: item
        })
    }
}

export const checkoutCart = () => {
    
    return dispatch => {
        return dispatch({
            type: "CHECKOUT"
        })
    }
    
}


// export const setTotal = (cart) => {
//     debugger
//     return dispatch => {
//         return dispatch({
//             type: "SET_TOTAL",
//             payload: cart
//         })
//     }
// }
// export const updateTotal = (quantity, product_id) => {
//     debugger
//     return dispatch => {
//         return dispatch({
//             type: "UPDATE_TOTAL",
//             payload: [quantity, product_id]
//         })
//     }
// }
