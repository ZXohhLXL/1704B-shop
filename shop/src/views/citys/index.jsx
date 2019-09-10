import React from 'react'

import RouterView from "@/router/router-view"

function Citys(props) {
    console.log(props.routes);
    return <div>
       <RouterView routes={props.routes}></RouterView>
    </div>
    
}
export default Citys