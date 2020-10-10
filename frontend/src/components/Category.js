import React from 'react'
import {Link} from 'react-router-dom'


function Category(props) {
    
    

 let catProducts = props.location.state.products.map(p => <li key={p.id}>
      <div className="product">
      <Link to={{
        pathname:'/product/' + p.id,
        state: {
          name: p.name,
          image: p.image, 
          price: p.price,
          description: p.description
        }
        
        }}>
           <img className="product-image" src={p.image} alt="product"></img>
          </Link>
       
        
        <div className="product-name">
        {p.name}
          </div>
    <div className="product-price">$ {p.price}</div>
      </div>
 </li>
 )
   
  
    return (
        
        <div className="category-show-name">
        <ul className="products">
          {catProducts}
          
        </ul>
           
            

        </div>
            
    
    )
}
    






export default Category


