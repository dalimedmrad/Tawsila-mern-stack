import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { Route, Switch} from 'react-router-dom';
import Home from './pages/Home/Home';
import PrivateRoute from './Components/router/PrivateRoute';
import Signin from './pages/Signin/Signin';
import SignUp from './pages/Signup/Signup';
import { currentUser, getAllUsers } from "./JS/userslice/userSlice";
import './App.css';
import AddTrajet from './pages/addTrajet/AddTrajet';
import Profile from './pages/Profile/Profile';
import Message from './Components/message/Message';
import PrivateRouteProfile from './Components/router/PrivateRouteProfile';
import Navbar from './Components/navBar/Navbar';
import Footer from './Components/footer/Footer';
import PrivateRouteListTrajets from './Components/router/PrivateRouteListTrajets';
import UsersList from './pages/pagesAdmin/UsersList/UsersList';
import { getAllTrajets } from './JS/trajetslice/trajetSlice';
import ListTrajets from './Components/AdminComponents/listTrajets/ListTrajets';
import ListtTrajets from './pages/ListTrajets/ListtTrajets';
import PrivateRouteUserList from './Components/router/PrivateRouteUserList'


const  App = () => {

  const dispatch = useDispatch();
  const isAuth = localStorage.getItem("token");

  useEffect(() => {
    if(isAuth){dispatch(currentUser());
      dispatch(getAllUsers());
      dispatch(getAllTrajets());
    }
  }, []);
    
  return (
      <div>
         <Navbar/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/connexion"  component={Signin}/>
            <Route path="/inscription" component={SignUp}/>
            <Route path="/message" component={Message}/>
            <Route path="/admin/home/listTrajet/:id" component={ListTrajets}/>
            <PrivateRouteUserList exact path="/admin/home/" component={UsersList}/>
            <PrivateRoute path="/trajet" component={AddTrajet}/>
            <PrivateRouteProfile  component={Profile} path="/profile"/>
            <PrivateRouteListTrajets component={ListtTrajets} path="/mestrajets"/>
          </Switch>
          <Footer/>
      </div>
    
  );
}

export default App;
