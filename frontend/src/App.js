import React, { Component } from 'react';
import data from './data'
import {div, Route, Redirect, Link} from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage'
import CategoryContainer from './components/CategoryContainer'
import Category from './components/Category'
import OrderContainer from './components/OrderContainer'
import Login from './components/Login'
import Logout from './components/Logout'
import Navbar from './components/Navbar'
import NavbarLoggedOut from './components/NavbarLoggedOut'
import { connect } from 'react-redux'
import { findCurrentUser } from './actions/currentUser'
import Signup from './components/Signup';

class App extends Component {

  componentDidMount(){
    this.props.findCurrentUser()

  }
  
   openMenu = () => {
    document.querySelector(".sidebar").classList.add("open")
  }

  
  render(){
  
    return (
       <div>
         {this.props.currentUser ? <Navbar/> : <NavbarLoggedOut/>}
           <main className="main">
               <div className="content">
                   <Route  exact path = "/product/:id" component={ProductPage}/>
                   <Route  exact path= "/"  component={HomePage} />
                   <Route  exact path='/categories/:id' component={Category}/>
                   <Route  exact path='/orders' component={OrderContainer}/>
                  {!this.props.currentUser ? <Route  exact path= '/login' component={Login}/> : <Redirect to='/'/>} 
                  {!this.props.currentUser ? <Route  exact path= '/signup' component={Signup}/> : <Redirect to='/'/>} 
               </div>
           </main>
         </div> 
    );}
  
}

const mapStateToProps = state => {
  return{
    currentUser: state.currentUser
  }
}

export default  connect(mapStateToProps, {findCurrentUser}) (App)
