import React, { Component } from 'react'
import { Icon, Input, Button} from 'antd';
import {login,captcha} from '@/api/user'


export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            img:'',
            username:"",
            password:"",
            captcha:''
        }
    }
    handleChange =(e)=>{
        // console.log(e.target.value);
        this.setState({
            [e.target.name]:e.target.value
        }) 
    }
    handleLogin=()=>{
        let {username,password,captcha} = this.state
        let params={
            username,
            password,
            captcha
        }
        login(params).then(res=>{
            // console.log(res);
            if(res.data.code === 1) {
                alert('登录成功')
                this.props.history.push('/citys')
            } else{
                alert(res.data.msg)
            } 
        })
    }
    render() {
        let {username,password,captcha} = this.state
        console.log(this.state.img);
        
        return (
            <div>  
                <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                    value={username}
                    name='username'
                    onChange={this.handleChange}
                />
                <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                    value={password}
                    name='password'
                    onChange={this.handleChange}
                />
                <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="验证码"
                    value={captcha}
                    name='captcha'
                    onChange={this.handleChange}
                />
                 <p dangerouslySetInnerHTML={{ __html: this.state.img }}  />
                <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.handleLogin}>
                    登录
                </Button>
            </div>
        )
    }
    componentDidMount(){
        captcha().then(res=>{
            // console.log(res);
            this.setState({
                img:res.data.data
            })
        })
    }
}