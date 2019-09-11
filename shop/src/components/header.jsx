import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
function Header(props) {
    console.log(props);
    return <header className="header"><span style={{display:props.isBack?"block":"none"}} onClick={()=>{props.history.go(-1)}}>&lt;</span>{props.title}</header>
}
//默认的props
Header.defaultProps={
    title:"租赁翻译机",
    isBack:false
}
export default withRouter(Header) 