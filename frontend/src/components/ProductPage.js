import React, { Component } from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import { connect } from "react-redux"
import { addToCartAction } from '../actions/cart'
import Login from './Login'



function ProductPage (props) {
    
   
    const product = props.location.state
    const cart = props.cart.cart
   
    console.log("cart", cart)

    function saveToLocalStorage (e){
        
        try{   
            
            let existingCartProducts = JSON.parse(localStorage.getItem('cart'))
            if(existingCartProducts === null) existingCartProducts = []
            // localStorage.setItem('product', serializedProduct)
            existingCartProducts.push(product)
            localStorage.setItem('cart', JSON.stringify(existingCartProducts))
            alert("Added To Cart")
        } catch(e){
            console.log(e)
        }
    }
    
    function addToOrder() {
        
        props.addToCartAction(product)
        // saveToLocalStorage(cart)
      
    }
           
        return (
            <div>
                <div className="product-info">
                    <div className="product-info-img">
                    <img  src={product.image}></img>
                    </div>
                    
                    <div className="product-info-details">
                        <ul>
                            <li>
                                <h3>{product.name}</h3>
                            </li>
                            <li>
                                <b>$ {product.price}</b>
                            </li>
                            <div>
                                <b>Description:</b><br>
                                </br>
                                {product.description}
                                <button onClick={(e) => saveToLocalStorage()}>Add To Order</button>
                            </div>
                            
                                
                        </ul>

                    </div>
                    

                </div>
            </div>
          
         
        )
    
}
const mapStateToProps = state => {
    return{
        product: state.product,
        cart: state.cart
    }
    
}

export default connect(mapStateToProps, {addToCartAction})(ProductPage);
