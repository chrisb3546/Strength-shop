import React from 'react';
import './App.css';

function App() {
  
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open")
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }

  
  return (
    
 
    <div className="grid-container">
      <header className="header">
        <div className="brand">

          <button onClick={openMenu}>
            &#9776;
          </button >
          <a href="index.html">Strength Shop </a>
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

        <ul className="products">
          <li>
            <div className="product">
              <img className="product-image" src='/img/1500-bar.jpg' alt="product"></img>
              <div className="product-name">
                <a href="product.html">1500 Bar</a></div>
              <div className="product-price">$300</div>
              </div>
          </li>
         
         
        </ul>
      </div>
      </main>
    </div>
 
  

    

  );
}



export default App
