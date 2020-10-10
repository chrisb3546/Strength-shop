import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class CategoryContainer extends Component {

    state ={
        categories:[
           
        ]
    }
    componentDidMount (){
        fetch("http://localhost:3001/categories")
        .then(res => res.json())
        .then(data => this.setState({
            categories: data
        }))

    
       
    }
     closeMenu = () => {
     document.querySelector(".sidebar").classList.remove("open")
      }
    
        

    render() {
        
        this.state.categories.map(cat => console.log(cat))
        let catArray = this.state.categories.map(cat => <li key={cat.id}>
           
            </li>)
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
