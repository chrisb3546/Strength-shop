export default (state = {cart:[]}, action) => {
    
    switch(action.type){
        case "ADD_PRODUCT_TO_CART":
        return { ...state.cart, cart: action.payload }
        default:
            return state
    }
}
