import React, { Component } from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import { connect } from "react-redux"
import { addToCartAction } from '../actions/cart'
import { findCurrentUser } from '../actions/currentUser'
import Login from './Login'




function ProductPage (props) {
    
   
    const product = props.location.state
    const cart = props.cart.cart
   
    console.log("props", props)

    function saveToLocalStorage (e){
        if (props.currentUser){
            try{   
            
            let existingCartProducts = JSON.parse(localStorage.getItem('cart'))
            if (existingCartProducts === null) existingCartProducts = []
            existingCartProducts.push(product)
            localStorage.setItem('cart', JSON.stringify(existingCartProducts))
            alert("Added To Cart")
        } catch(e){
            console.log(e)
        }
    }else{
        alert("Please Log in!")
    }
        
        
        
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
                                <h4>{product.description}</h4>
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
        products: state.products,
        cart: state.cart,
        currentUser: state.currentUser
    }
    
}

export default connect(mapStateToProps, {addToCartAction, findCurrentUser})(ProductPage);
