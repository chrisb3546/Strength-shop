import React from 'react';
import data from './data'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage'

function App() {
  
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open")
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
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
 
        </div>
        <div className="header-links">
          <a href="login">Log in</a>
          <a href="signup">Sign up</a>
          <a href="orders">Your Orders</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Equipment Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>X</button>
        <ul>
          <li>
            <a href="index.html">Barbells</a>
          </li>

          <li>
            <a href="index.html">Sleds</a>
          </li>

       </ul>
      </aside>
      <main className="main">
        <div className="content">
          <Route  exact path = "/product/:id" component={ProductPage}/>
          <Route  exact path= "/"  component={HomePage} />

       
      </div>
      </main>
      <div id="root"></div>
    </div>
    </BrowserRouter>
 
  

    

  );
}



export default App
