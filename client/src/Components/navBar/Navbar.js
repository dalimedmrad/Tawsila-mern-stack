import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { logout } from "../../JS/userslice/userSlice";
import './nav.css'
import { Link } from 'react-router-dom';
import $ from 'jquery';

const Navbar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const isAuth = localStorage.getItem("token");
    const isAdmin = localStorage.getItem("isAuth");
    const userRedux = useSelector((state) => state.user.user);


    const handlelogout =()=>{
        dispatch(logout());
        history.push('/');
        window.location.reload()
     }
     useEffect(() => {
        $(window).on('scroll',function(){
            if($(window).scrollTop()){
              $('nav').addClass('black');
            }else {
              $('nav').removeClass('black');
            }
          })
     }, [])
    
    return (
        <nav>
            <div className="logo">
                <Link to="/">
                    <img src={process.env.PUBLIC_URL +"/lg2.gif"} />
                </Link>
            </div>
            <ul>
                <Link to="/trajet">
                    <li>Publier un trajet</li>
                </Link>
                {isAdmin?
                <ul>
                    <Link to="/admin/home/"><li>Dashboard</li></Link>
                </ul>:null

                }
                {isAuth? 
                    <ul>
                        <Link to="/mestrajets">
                            <li>Mes trajets</li>
                        </Link>
                        <Link to="/profile">
                            <li>Mon Profile</li>
                        </Link>
                        <Link><li onClick={handlelogout}>Deconnexion</li></Link>
                        <li className="iimgg"><img className="imgg" src={userRedux?.image?`http://localhost:5000${userRedux?.image}`: null}/></li>
                    </ul>
                    :
                    <ul>
                        <Link to='/connexion'>
                            <li>Connexion</li>
                        </Link>
                        <Link to="/inscription">
                            <li>Inscription</li>
                        </Link>
                    </ul>
                }                    
            </ul>   
        </nav>
    );
}

export default Navbar;
