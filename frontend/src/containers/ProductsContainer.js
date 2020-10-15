import React, { Component } from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchProducts} from "../actions/fetchProducts"

class ProductsContainer extends Component {
    componentDidMount(){
        this.props.fetchProducts()
      }
    render() {
        return (
          <div>
            <div>
              <ul className="products">
                {
                  this.props.products.products.map(product => 
                  <li key={product.id}>
                    <div className="product">
                    <Link to={{
                      pathname:'/product/' + product.id,
                      state :{
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        description: product.description
                      }
                    }}>
                      <img className="product-image" src={product.image} alt="product"></img>
                    </Link>
                    <div className="product-name">
                      {product.name}
                    </div>
                    <div className="product-price">${product.price}
                    </div>
                    </div>
                  </li>)
                }
              </ul>
            </div>
          </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        products: state.products
    }
}


export default connect(mapStateToProps, {fetchProducts})(ProductsContainer)
