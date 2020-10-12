import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout }  from '../actions/currentUser'
import { currentUser } from '../actions/currentUser'



class Logout extends Component  {

    state = {
        username:'',
        password:''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        
        
        

    }

    
    

   
    

     handleSubmit = (e) => {
        
        e.preventDefault()
        this.props.logout(this.state)

    }
    render(){ 
        
        
        return (
        <div>
            <form  onSubmit={this.handleSubmit}>
                <input type="text" name="username" placeholder="username"  onChange={this.handleChange} ></input>
                <input type="text" name="password" placeholder="password"  onChange={this.handleChange} ></input>
                <input type="submit" value= "Log in"/>
        </form>
            
        </div>
    )}
   
}


export default connect(null, { logout})(Logout)