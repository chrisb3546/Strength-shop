import React, { Component } from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import data from '../data'

function ProductPage (props) {
    
    //  console.log(props.location.state)
     const product = props.location.state
    //  console.log(product)
        return (
            <div>
                <div>
                <Link to="/">Home</Link>
                </div>

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
                                <b>{product.price}</b>
                            </li>
                            <div>
                                <b>Description:</b><br>
                                </br>
                                {product.description}
                            </div>
                            <button>Add To Order</button>
                        </ul>

                    </div>
                    

                </div>
            </div>
        )
    
}

export default ProductPage;
