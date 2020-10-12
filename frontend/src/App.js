import React, { Component } from 'react';
import data from './data'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage'
import CategoryContainer from './components/CategoryContainer'
import Category from './components/Category'
import OrderContainer from './components/OrderContainer'
import Login from './components/Login'
import Logout from './components/Logout'
import { connect } from 'react-redux'
import { findCurrentUser } from './actions/currentUser'

class App extends Component {

  componentDidMount(){
    this.props.findCurrentUser()

  }
  
   openMenu = () => {
    document.querySelector(".sidebar").classList.add("open")
  }

  
 render(){return (
  this.props.currentUser ? <Logout/> : <Login/>
  
//  <BrowserRouter>
//     <div className="grid-container">
//       <header className="header">
//         <div className="brand">

//           <button onClick={openMenu}>
//             &#9776;
//           </button >
//           <Link to='/'>Strength Shop</Link>
//           <CategoryContainer/>
//         </div>
//         <div className="header-links">
//           <a href="login">Log in</a>
//           <a href="signup">Sign up</a>
//           <Link to='/orders'>Orders</Link>
//         </div>
//       </header>
    

//       <main className="main">
//         <div className="content">
//           <Route  exact path = "/product/:id" component={ProductPage}/>
//           <Route  exact path= "/"  component={HomePage} />
//           <Route  exact path='/categories/:id' component={Category}/>
//           <Route  exact path='/orders' component={OrderContainer}/>

     
//       </div>
//       </main>
//       <div id="root"></div>
//     </div>
//     </BrowserRouter>



  

);}
  
}

const mapStateToProps = state => {
  return{
    currentUser: state.currentUser
  }
}

export default  connect(mapStateToProps, {findCurrentUser}) (App)
