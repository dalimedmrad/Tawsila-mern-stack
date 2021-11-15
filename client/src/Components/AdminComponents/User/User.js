import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteuser, getAllUsers } from '../../../JS/userslice/userSlice';
import './User.css'
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom'

const User = ({user}) => {
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
            title: 'Voulez-vous supprimer cet utilisateur ?',
            // text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Oui',
            cancelButtonText: 'Annuler',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteuser(user._id))
                dispatch(getAllUsers())
                swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              window.location.reload();
            };
          })
     }
    return (
        <tr>
            <td><img className="img" src={`http://localhost:5000${user.image}`}/></td>
            <td>{user.name}</td>
            <td>{user.lastName}</td>
            <td> {user.date_naiss}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>
                <button onClick={handleDelete} className="btn btn-danger">Supprimer</button>
                <Link to={`/admin/home/listTrajet/${user._id}`}><button className="btn btn-success">list de trajets de {user.name}</button></Link>
            </td>
        </tr>
    );
}

export default User;
