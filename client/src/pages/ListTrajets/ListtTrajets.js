import React from 'react'
import {useSelector} from 'react-redux'
import Trajet from '../../Components/Trajet/Trajet'
import './listtrajets.css'

const ListtTrajets = () => {
    const userRedux = useSelector((state) => state.user.user);
    const trajetRedux = useSelector((state) => state.trajet.trajets);

    return (
        <div className="listtrajets">
          {trajetRedux?(trajetRedux.filter(el=>el.createdBy === userRedux?._id).map((el)=>(<Trajet trajet={el}/>))):(
            <div className="loading"> <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="dzdz" /></div>
          )}
        </div>
    )
}

export default ListtTrajets;
