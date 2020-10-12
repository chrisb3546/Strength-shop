import React, { Component } from 'react'

export default class OrderContainer extends Component {
    render() {
        console.log(this.props.location.state)
        let orderedProduct = this.props.location.state
        return (
            <div>
                <h1>hello</h1>
            </div>
        )
    }
}
