import React, { Component } from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import data from '../data'


class HomePage extends Component {
  state ={
    products: []
  }

    componentDidMount(){
    fetch("http://localhost:3001/products")
    .then(res => res.json())
    .then(data => this.setState({
      products: data
    }))
  }
    
        render(){
          // console.log(this.state)
        return (
            <div>
                
                 <ul className="products">
          {
            this.state.products.map(product => <li key={product.id}>
              <div className="product">
              <Link to={{
                pathname:'/product/' + product.id,
                state :{
                  name: product.name,
                  price: product.price,
                  image: product.image
                }
              }}>>
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
      }
    
        export default HomePage

