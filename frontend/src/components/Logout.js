import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout }  from '../actions/currentUser'
import { currentUser } from '../actions/currentUser'



class Logout extends Component  {

    state = {
        username:'',
        password:''
    }


    
    

   
    

     handleSubmit = (e) => {
        

    }
    render(){ 
        
        
        return (
        <div>
            <form  onSubmit={this.props.logout}>
                <input type="submit" value= "Log Out"/>
        </form>
            
        </div>
    )}
   
}


export default connect(null, { logout})(Logout)