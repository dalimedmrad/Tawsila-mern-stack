import React from 'react'
import {Route,Redirect  } from 'react-router-dom';


const PrivateRouterAdminHome = ({component:Component,...rest}) => {
    const isAuth = localStorage.getItem("token");
    const isAdmin=localStorage.getItem("isAuth");


    if(isAuth &&isAdmin){
       return <Route  component={Component} {...rest} />;
    }else{
      return  <Redirect to="/"/>
    }
}

export default PrivateRouterAdminHome;
