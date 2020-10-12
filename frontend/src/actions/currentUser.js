export const setCurrentUser = user =>{
    
    return{
        type: "SET_CURRENT_USER",
        user
    }
}

export const login = credentials => {
   
  return dispatch => {
        return fetch("http://localhost:3001/login", {
            credentials: "include", 
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"

                },
                body: JSON.stringify(credentials)
        }) 
        .then(res => res.json())
        .then(user => {
            if(user.error){
                alert(user.error)
            }
            else{
                dispatch(setCurrentUser(user))
            }

        })
        
    }

}

export const findCurrentUser = () => {
    
    return dispatch => {
        return fetch("http://localhost:3001/get_current_user", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"

            },
            
    }) 
    .then(res => res.json())
    .then(user => {
        if(user.error){
            alert(user.error)
        }
        else{
            dispatch(setCurrentUser(user))
        }

    })
    }

}
