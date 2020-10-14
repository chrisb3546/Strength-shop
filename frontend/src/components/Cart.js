import React from 'react'
import { connect } from 'react-redux'

 function Cart(props) {
     
    

   
     
   const cart = JSON.parse(localStorage.getItem('cart'))
   let newArray = []
   newArray.push(cart)
   const usableCart = newArray[0]
   console.log('cart', usableCart)

   const renderedCart = usableCart.map((cartItem, i)=>  <div id={i}>
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
                <div>
                    <b>Description:</b><br>
                    </br>
                    {cartItem.description}
                    <button name={i} onClick={removeItemFromCart}>Checkout</button>
                </div>
                
                    
            </ul>

        </div>
        

    </div>
</div> )

function removeItemFromCart(e){
    usableCart.splice(e.target.name, 1)
    // debugger
    let updatedCart = JSON.stringify(usableCart)
    localStorage.setItem('cart', updatedCart)
    let node = document.getElementById(e.target.name)
    node.remove()
    alert("Successfully checked out")
    // iterate over and find matching index to button id
    // new array without previous item
    //use to update local storage
        
  }
    
    return (
        usableCart.length === 0 ? <div>
            Cart Empty!
        </div>
        :
        <div>
            {renderedCart}
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
export default connect(mapStateToProps)(Cart)