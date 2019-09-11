import React from 'react'
import {Switch,Route,Redirect} from "react-router-dom"


function RouterView({routes}) {
    let RouteArr=routes.filter(item=>!item.redirect);

    let redirectArr = routes.filter(item =>item.redirect);

    return <Switch>

    {/* city===>citys */}
        {RouteArr.map(item => <Route key={item.path} path={item.path} render={(props)=>{
            console.log("props===",props);
            
            return <item.component {...props}></item.component>
        }}/>)}
            
           
        
        {
            redirectArr.map(item=><Redirect from={item.path} to={item.redirect} key={item.path}></Redirect>)
        }
    </Switch>
}
export default RouterView