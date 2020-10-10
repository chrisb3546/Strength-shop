import React from 'react';
import data from './data'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage'
import CategoryContainer from './components/CategoryContainer'
import Category from './components/Category'

function App() {
  
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open")
  }

  
 
  return (
    
    
 <BrowserRouter>
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
          <a href="login">Log in</a>
          <a href="signup">Sign up</a>
          <a href="orders">Your Orders</a>
        </div>
      </header>
      

      <main className="main">
        <div className="content">
          <Route  exact path = "/product/:id" component={ProductPage}/>
          <Route  exact path= "/"  component={HomePage} />
          <Route  exact path='/categories/:id' component={Category}/>

       
      </div>
      </main>
      <div id="root"></div>
    </div>
    </BrowserRouter>
 
  

    

  );
}



export default App
