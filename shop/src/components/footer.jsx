import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
export default class footer extends Component {
    render() {
        return  <footer className="footer">
        <NavLink to="/citys">城市</NavLink>
         <NavLink to="/order">订单</NavLink>
          <NavLink to="/my">我的</NavLink>
            </footer>
           
        
    }
}
