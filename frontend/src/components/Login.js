
import React, { Component } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { login }  from '../actions/currentUser'





class Login extends Component  {

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
        this.props.login(this.state)
        

    }

    render(){ 
        
        
        return (
            
        <div>
            <form  onSubmit={this.handleSubmit}>
                <input type="text" name="username" placeholder="username"  onChange={this.handleChange} ></input>
                <input type="password" name="password" placeholder="password"  onChange={this.handleChange} ></input>
                <input type="submit" value= "Log in" />
            </form>
        </div>
        
         

    )}
   
}



export default connect(null, { login })(Login)



