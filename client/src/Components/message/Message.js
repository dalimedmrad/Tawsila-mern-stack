import React from "react";
import { Link } from "react-router-dom";
import './message.css'

const Message =()=>{

    return(
        <div className="message">
                <h1>Veuillez <Link to="/inscription"><strong>créer un compte</strong></Link> ou <Link to="/connexion"> <strong> se connecter</strong></Link> pour publier un trajet.</h1>
        </div>
    );

}

export default Message;