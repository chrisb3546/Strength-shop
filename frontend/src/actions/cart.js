export const addToCartAction = product => {
    return dispatch => {
        dispatch({
            type: "ADD_PRODUCT_TO_CART",
            payload: product
        })
       
    }

}

