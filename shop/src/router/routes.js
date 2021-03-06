import React, { Component } from 'react'

function Loading() {
    return <div>loading...</div>
}

console.log(import("@/views/login"));
import("@/views/login").then(res=>{
    console.log(res);
    
})


//高阶组件：接收一个组件返回一个新组件
  
  function Loadable(params){
       return class extends Component{
           state = {
               Com:params.loading
           }
           render(){
               let {Com}=this.state;
               console.log(this.props);
               return <Com {...this.props}></Com>
               
           }

           componentDidMount(){
               params.loader().then(data=>{
                   this.setState({
                       Com:data.default
                   })
               })
           }
       }
  }
  const Login =Loadable({
      loader:()=>import("@/views/login"),
      loading:Loading
  });
    const Registry =Loadable({
      loader:()=>import("@/views/registry"),
      loading:Loading
  });

    const Citys =Loadable({
      loader:()=>import("@/views/citys"),
      loading:Loading
  });
    const Shops =Loadable({
      loader:()=>import("@/views/shops"),
      loading:Loading
  });
    const Detail =Loadable({
      loader:()=>import("@/views/detail"),
      loading:Loading
  });
    const Write =Loadable({
      loader:()=>import("@/views/write"),
      loading:Loading
  });
    const My =Loadable({
      loader:()=>import("@/views/my"),
      loading:Loading
  });
    const Order =Loadable({
      loader:()=>import("@/views/order"),
      loading:Loading
  });
   const One =Loadable({
      loader:()=>import("@/views/citys/one"),
      loading:Loading
  });
   const Two =Loadable({
      loader:()=>import("@/views/citys/two"),
      loading:Loading
  });

const routes=[
    {
        path:"/login",
        component:Login
    },
     {
        path:'/registry',
        component:Registry
    },
     {
        path:'/citys',
        component:Citys,
      
    },
     {
        path:'/shops/:id',
        component:Shops
    },
     {
        path:'/detail',
        component:Detail
    },
    {
        path:'/write',
        component:Write
    },
    {
        path:'/my',
        component:My
    },
    {
        path:'/order',
        component:Order
    },
    {
        path:'/',
        redirect:'/citys'
    }
]
  
  export default routes
  
  