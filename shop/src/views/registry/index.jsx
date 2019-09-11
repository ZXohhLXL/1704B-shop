import React, { Component } from 'react'
import {registry} from "@/api/user"
export default class index extends Component {
    state={
        username:"",
        password:"",
        nickname:""
    }
    handleChange(filed,e){
        this.setState({
            [filed]:e.target.value
        })
    }
      registryFun(){
        registry(this.state).then(res=>{
            console.log(res);
            if(res.data.code===1){
                alert("注册成功")
                this.props.history.push({pathname:"/login"})
            }else{
                alert("错误")
            }
        })
    }
    render() {
        let {username,password,nickname}=this.state
        return (
            <div>
                <input type="text" placeholder="用户名" value={username} onChange={this.handleChange.bind(this,"username")}/>
                 <input type="text" placeholder="密码"
                 value={password}
                 onChange={this.handleChange.bind(this,"password")}
                 />
                  <input type="text" placeholder="昵称"
                  value={nickname}
                  onChange={this.handleChange.bind(this,"nickname")}
                  />
                  <button onClick={this.registryFun.bind(this)}>注册</button>
            </div>
        )
    }
  
}
