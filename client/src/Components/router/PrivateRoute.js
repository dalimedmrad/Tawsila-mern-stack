import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({component,path}) => {
    
    const isAuth = localStorage.getItem("token");

    if(isAuth){
       return <Route component={component} path={path} />;
    }else
     {return <Redirect to="/message"/>;}
    
   
}

export default PrivateRoute;
