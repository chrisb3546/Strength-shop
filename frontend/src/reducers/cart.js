export default (state =  [], action) => {
    
    switch(action.type){
        case "SET_SHOPPING_CART":
            return   action.payload
        case "ADD_ITEM_TO_CART":
            return [...state, action.payload]
        case "REMOVE_ITEM_FROM_CART":
            console.log('action.payload', action.payload)
            return  state.filter((product => product.name !== action.payload))
        case "CHECKOUT":
            return state = []
        case "SET_TOTAL":
            return state.total = action.payload.reduce(function(a, b){
                return a.price + b.price
                
            }, 0)
        default:
            return state
    }
    
    
}