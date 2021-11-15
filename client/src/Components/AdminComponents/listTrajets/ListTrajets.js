import React from 'react'
import { useSelector } from 'react-redux';
import Trajet from '../Trajet/Trajet';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ListTrajets = (props) => {
    const trajetRedux = useSelector((state) => state.trajet.trajets);
    const params  = useParams()
    console.log(params);
    return (
        
        <div style={{margin:'5% 0'}}>
            <Link to="/admin/home/"><button style={{margin:'0% 4%'}} className="btn btn-success">List des utilisateurs</button></Link>
            {trajetRedux? (trajetRedux.filter(el=>el.createdBy == params.id).map((el)=>(<Trajet trajet={el}/>))):(
                <div className="loading"> <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="dzdz" /></div>
            )}       
        </div>
    )
}

export default ListTrajets;
