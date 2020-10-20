import React, { useEffect }from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { setShoppingCart, removeItemFromCart, checkoutCart} from '../actions/cart'
import ProductPage from './ProductPage'


function Cart(props) {
    let updatedCart = (props.cart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    const cart = JSON.parse(localStorage.getItem('cart'))
    let newArray = []
    newArray.push(cart)
    const usableCart = newArray[0]
    console.log("CART PROPS", props.cart)
   
  
      
    
    
    
   const renderedCart =  props.cart.map((cartItem, i) =>  <div id={i}>
        <div className="product-info">
            <div className="product-info-img">
                <img  src={cartItem.image}></img>
            </div>
            <div className="product-info-details">
                <ul>
                    <li>
                        <h3>{cartItem.name}</h3>
                    </li>
                    <li>
                        <b>$ {cartItem.price}</b>
                    </li>
                    <br/>
                    <div>
                        <b>Description:</b><br>
                        </br>
                        {cartItem.description}
                        <br/>
                        <button name={cartItem.name} id={i} onClick={removeItemFromCart}>Remove</button>
                    </div>
                </ul>
            </div>
        </div>
    </div>
    )

   

    function removeItemFromCart(e){
        props.removeItemFromCart(e.target.name)
        alert("Item removed from cart")
    }

  

  function checkOutCart(){
        props.checkoutCart()
        alert("Successfully checked out, (this is would send you to checkout screen in real store)")
   }
  
    return (
        
       props.cart.length === 0 ? 
        <div>
            <h1>Cart Empty!</h1>
        </div>
        :
        <div>
            {renderedCart}
            <div className="checkout">
                <button  onClick={checkOutCart}>Checkout</button>
            </div>
        </div>
        
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
export default connect(mapStateToProps, { setShoppingCart, removeItemFromCart, checkoutCart })(Cart)