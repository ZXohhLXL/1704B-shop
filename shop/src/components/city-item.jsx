import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
 class cityItem extends Component {
    
    render() {
        let {storeName,storeId}=this.props
        return (
            <div  onClick={() => {this.props.history.push(`/shops/${storeId}`)}}>
                {storeName}
                {/* onClick={()=>{this.history.push(`./shops/${storeId}`)} */}
            </div>
        )
    }
}
export default withRouter(cityItem)