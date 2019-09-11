import React, { Component } from 'react'

export default class index extends Component {
    render() {
        let {id}=this.props.match.params
        return (
            <div>
           {id}
              shops  
            </div>
        )
    }
}
