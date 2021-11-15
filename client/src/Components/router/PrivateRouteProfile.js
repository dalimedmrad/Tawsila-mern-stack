import React from 'react'
import { Redirect, Route } from 'react-router-dom';

const PrivateRouteProfile = ({component,path}) => {
    const isAuth = localStorage.getItem("token");
        
        if(isAuth){
        return <Route component={component} path={path} />;
        }else{
            
            return <Redirect to="/connexion"/>;
        }
        
   
}

export default PrivateRouteProfile;
