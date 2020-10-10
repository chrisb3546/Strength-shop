import React from 'react'


function Category(props) {
    console.log(props.match.params.id)
    console.log(props.location.state.name)
    let name = props.location.state.name
    return (
        <div>
        <div className="category-show-name">
            <h1>{name}</h1>

        </div>
            
        </div>
    )
}

Category.propTypes = {

}

export default Category


