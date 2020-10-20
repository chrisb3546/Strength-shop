import React, { Component } from 'react';
import { Route, Redirect, Link} from 'react-router-dom'
import './App.css';
import ProductsContainer from './containers/ProductsContainer'
import ProductPage from './components/ProductPage'
import Category from './components/Category'
import Login from './components/Login'
import Navbar from './components/Navbar'
import NavbarLoggedOut from './components/NavbarLoggedOut'
import { connect } from 'react-redux'
import { findCurrentUser } from './actions/currentUser'
import Signup from './components/Signup';
import Cart from './components/Cart';
import { setShoppingCart } from './actions/cart'


class App extends Component {

  componentDidMount(){
    this.props.findCurrentUser()
    this.getLocalStorage()

  }
  
   openMenu = () => {
    document.querySelector(".sidebar").classList.add("open")
  }

  getLocalStorage(){
    const cart = JSON.parse(localStorage.getItem('cart'))
    let newArray = []
    newArray.push(cart)
    const usableCart = newArray[0]
    this.props.setShoppingCart(usableCart)
  }

  


  
  render(){
  
    this.getLocalStorage()
    
    return (
       <div>
         {this.props.currentUser ? <Navbar/> : <NavbarLoggedOut/>}
           <main className="main">
               <div className="content">
                   <Route  exact path = "/product/:id" component={ProductPage}/>
                   <Route  exact path= "/"  component={ProductsContainer} />
                   <Route  exact path='/categories/:id' component={Category}/>
                   <Route  exact path='/cart' component={Cart}/>
                  {!this.props.currentUser ? <Route  exact path= '/login' component={Login}/> : <Redirect to='/'/>} 
                  {!this.props.currentUser ? <Route  exact path= '/signup' component={Signup}/> : <Redirect to='/'/>} 
               </div>
           </main>
         </div> 
    );}
  
}

const mapStateToProps = state => {
  return{
    currentUser: state.currentUser,
    

  }
}

export default  connect(mapStateToProps, {findCurrentUser, setShoppingCart}) (App)
