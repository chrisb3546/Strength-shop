import React, { Component } from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import data from '../data'

function HomePage (props) {

    
        
        return (
            <div>
                <h1>HELLO</h1>
                 <ul className="products">
          {
            data.products.map(product => <li key={product.id}>
              <div className="product">
              <Link to={'/product/' + product.id}>>
                <img className="product-image" src={product.image} alt="product"></img>
                </Link>
                <div className="product-name">
                {product.name}
                  </div>
            <div className="product-price">{product.price}</div>
                </div>
            </li>)
            
            }
            </ul>
  
            </div>
            )
        }
    
        export default HomePage

