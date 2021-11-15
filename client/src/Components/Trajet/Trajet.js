import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTrajet } from '../../JS/trajetslice/trajetSlice';
import EditTrajet from '../EditTrajet';
import './Trajet.css';
import Swal from 'sweetalert2'


const Trajet = ({trajet}) => {
    const dispatch = useDispatch();
    const handleDelete=()=>{
       const swalWithBootstrapButtons = Swal.mixin({
           customClass: {
             confirmButton: 'btn btn-success',
             cancelButton: 'btn btn-danger'
           },
           buttonsStyling: false
         })
         swalWithBootstrapButtons.fire({
           title: 'Voulez-vous supprimer cette trajet ?',
           icon: 'warning',
           showCancelButton: true,
           confirmButtonText: 'Oui',
           cancelButtonText: 'Annuler',
           reverseButtons: true
         }).then((result) => {
           if (result.isConfirmed) {
               dispatch(deleteTrajet(trajet._id))
               swalWithBootstrapButtons.fire(
               'Deleted!',
               'Your file has been deleted.',
               'success'
             )
             window.location.reload()
           } 
         })
    }
    return (
        <div className="trajet-card">
          <div className="image"><i class="fas fa-map-marker-alt"></i></div>   
          <div className="trajet-body">
              <div className="trajet-row"><i class="fas fa-map-marked-alt"></i><span>Depart :</span>{trajet.depart}</div>
              <div className="trajet-row"><i class="fas fa-map-marked-alt"></i><span>Arrive :</span>{trajet.arrive}</div>
              <div className="trajet-row"><i class="fas fa-calendar-week"></i><span> Date :</span>{trajet.date_dep}</div>
          </div>  
          <div className="trajet-body">
              <div className="trajet-row"><i class="far fa-money-bill-alt"></i><span>Prix :</span>{trajet.prix} DT </div>
              <div className="trajet-row"><i class="fas fa-chair"></i><span>Nombre de places :</span>  {trajet.nombredepassage} </div>
              <div className="trajet-row"><i class="fas fa-calendar-week"></i><span> Model de voiture :</span>{trajet.modelvoiture}</div>
          </div>  
          <div className="trajet-body">
              <div className="trajet-row"><i class="fas fa-tint"></i><span>Couleur de voiture :</span>{trajet.couleurvoiture}</div>
              <div className="trajet-row"><i class="fas fa-chair"></i><span>Description :</span>{trajet.description.slice(0,20)}...</div>
          </div>  
          <div className="trajet-action">
            <EditTrajet tj={trajet} />
            <button onClick={handleDelete}>Supprimer</button>
          </div>   
        </div>            
    );
}

export default Trajet;
