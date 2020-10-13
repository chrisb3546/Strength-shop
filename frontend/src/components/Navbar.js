import React, { Component } from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import CategoryContainer from './CategoryContainer'
import Login from './Login'
import Logout from './Logout'
import { logout } from '../actions/currentUser'
import { connect } from 'react-redux'
import { findCurrentUser } from '../actions/currentUser'

 class Navbar extends Component {
    openMenu = () => {
        document.querySelector(".sidebar").classList.add("open")
    }

     handleClick = (e) =>{
        e.preventDefault()
        this.props.logout()
        alert("successfully Logged out")

    }

    render() {
        return (
      <div>
        <div className="grid-container">
       <header className="header">
         <div className="brand">

           <button onClick={this.openMenu}>
             &#9776;
           </button >
           <Link to='/'>Strength Shop</Link>
           <CategoryContainer/>
         </div>
         <div className="header-links">
         
        {this.props.currentUser ? <a href="logout" onClick={this.handleClick} >Log out</a> : <Link to="/login" >Log in</Link>}
           <a href="signup">Sign up</a>
           <Link to='/orders'>Orders</Link>
         </div>
       </header></div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{
      currentUser: state.currentUser
    }
  }

export default connect(mapStateToProps, {findCurrentUser, logout})(Navbar)
