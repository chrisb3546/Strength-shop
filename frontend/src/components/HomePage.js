import React, { Component } from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchProducts} from "../actions/fetchProducts"


class HomePage extends Component {
  // state ={
  //   products: []
  // }

    componentDidMount(){
    this.props.fetchProducts()
  }
    
        render(){
          console.log(this.props.products.products)
        return (
            <div>
                
                 <ul className="products">
          {
            this.props.products.products.map(product => <li key={product.id}>
              <div className="product">
              <Link to={{
                pathname:'/product/' + product.id,
                state :{
                  name: product.name,
                  price: product.price,
                  image: product.image
                }
              }}>
                <img className="product-image" src={product.image} alt="product"></img>
                </Link>
                <div className="product-name">
                {product.name}
                  </div>
            <div className="product-price">${product.price}</div>
                </div>
            </li>)
            
            }
            </ul>
  
            </div>
            )
        }
      }

      const mapStateToProps = state =>{
      return {
        products: state.products
      }

      }
    
        export default connect(mapStateToProps, {fetchProducts})(HomePage)

