import React from 'react';
import "./TrajetHome.css";
import UserDetail from './userDetail/UserDetail';

const TrajetHome = ({trajet}) => {
    return (
        <div className="trajet-card">
            <div className="image"><i class="fas fa-map-marker-alt"></i></div>   
            <div className="trajet-body">
                <div className="trajet-row"><i class="fas fa-map-marked-alt"></i><span>Depart :</span> {trajet.depart} </div>
                <div className="trajet-row"><i class="fas fa-map-marked-alt"></i><span>Arrive :</span> {trajet.arrive} </div>
                <div className="trajet-row"><i class="fas fa-calendar-week"></i><span>Date :</span> {trajet.date_dep} </div>
            </div>  
            <div className="trajet-body">
                <div className="trajet-row"><i class="far fa-money-bill-alt"></i><span>Prix :</span> {trajet.prix}DT </div>
                <div className="trajet-row"><i class="fas fa-chair"></i><span> Nombre places :</span> {trajet.nombredepassage}</div>
                <div className="trajet-row"><i class="fas fa-calendar-week"></i><span> Model voiture :</span> {trajet.modelvoiture}</div>
            </div>  
            <div className="trajet-body">
                <div className="trajet-row"><i class="far fa-money-bill-alt"></i><span>Couleur de voiture :</span> {trajet.couleurvoiture}</div>
                <div className="trajet-row"><i class="fas fa-chair"></i><span>Description :</span> {trajet.description.slice(0,20)}...</div>
            </div>  
            <div className="trajet-action">
                <button>Details</button>
                <UserDetail id={trajet.createdBy}/>
            </div>   
        </div>
    );
}

export default TrajetHome;
