const initialState ={
    username: '',
    password: ''
}

export default (state = {}, action) => {
  
    switch(action.type){
        case "UPDATE_LOGIN":
           return action.updatedForm
            default:
            return state
    }
    
    
}