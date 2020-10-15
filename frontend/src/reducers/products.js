export default (state = {products:[], categories: []}, action) => {
    
    switch(action.type){
        case "FETCH_PRODUCTS":
            return {products: action.payload}
        default:
            return state
    }
    
    
}