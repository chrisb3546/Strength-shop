import React, { Component } from 'react'
import {connect} from 'react-redux'
import { signup } from '../actions/currentUser'


 class Signup extends Component {
    state = {
        email: '',
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
        this.props.signup(this.state)
    }

    render() {
        return (
            <div>
                <div>
            <form  onSubmit={this.handleSubmit}>
                <input type="text" name="email" placeholder="email"  onChange={this.handleChange} ></input>
                <input type="text" name="username" placeholder="username"  onChange={this.handleChange} ></input>
                <input type="password" name="password" placeholder="password"  onChange={this.handleChange} ></input>
                <input type="submit" value= "Sign Up" />
        </form>
            
        </div>
            </div>
        )
    }
}

export default connect(null, {signup})(Signup)
