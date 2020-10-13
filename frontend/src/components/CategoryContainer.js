import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {fetchCategories} from '../actions/fetchCategories'


 class CategoryContainer extends Component {

    state ={
        categories:[
           
        ]
    }
    componentDidMount (){
        this.props.fetchCategories()
  
    }
     closeMenu = () => {
     document.querySelector(".sidebar").classList.remove("open")
      }
    
        

    render() {
        console.log(this.props)
        this.props.categories.categories.map(cat => console.log(cat))
        let catArray = this.props.categories.categories.map(cat => <li className= "sidebar-text"key={cat.id}>
            <Link to={{
                pathname: '/categories/'+ cat.id,
                state:{
                    name: cat.name,
                    products: cat.products
                }
            }}onClick={this.closeMenu}>
                {cat.name}
            </Link>
            
           
           
            </li>
            )
        return (
            <div>
               <aside className="sidebar">
        <h3>Equipment Categories</h3>
        <button className="sidebar-close-button" onClick={this.closeMenu}>X</button>
        <ul>
         
          {catArray}

         

       </ul>
      </aside>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        categories: state.categories
    }
}


export default connect(mapStateToProps, {fetchCategories})(CategoryContainer)
