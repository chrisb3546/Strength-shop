import React, { Component } from 'react'
import {BrowserRouter, Route, Link, useHistory} from 'react-router-dom'
import CategoryContainer from '../containers/CategoryContainer'
import Login from './Login'
import { logout } from '../actions/currentUser'
import { connect } from 'react-redux'
import { findCurrentUser } from '../actions/currentUser'

 function Navbar (props) {
    const openMenu = () => {
        document.querySelector(".sidebar").classList.add("open")
    }

     const handleClick = (e) =>{
        e.preventDefault()
        props.logout()
        alert("successfully Logged out")

    }

    const history = useHistory()
        return (
      <div>
        <div className="grid-container">
       <header className="header">
         <div className="brand">

           <button onClick={openMenu}>
             &#9776;
           </button >
           <Link to='/'>Strength Shop</Link>
           <CategoryContainer/>
         </div>
         <div className="header-links">
         
        {props.currentUser ? <a href="logout" onClick={handleClick} >Log out</a> : <Link to="/login" >Log in</Link>}
           <a href="signup">Sign up</a>
           <a onClick={() => history.push('/cart')}>Cart</a>
         </div>
       </header></div>
            </div>
        )
    }

const mapStateToProps = state => {
    return{
      currentUser: state.currentUser
    }
  }

export default connect(mapStateToProps, {findCurrentUser, logout})(Navbar)
