import React from 'react'
import { useSelector } from 'react-redux';
import User from '../../../Components/AdminComponents/User/User';
import './userList.css';

const UsersList = () => {
  const userRedux = useSelector((state) => state.user.user);
  const usersRedux = useSelector((state) => state.user.users);

  return (
      <div className="userList">
          <table id="example2" class="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Photo</th>
                <th>Non</th>
                <th>Prénom </th>
                <th>Date de naissance</th>
                <th>Addresse email</th>
                <th>Numero de télephone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {usersRedux?.filter(el=>el._id != userRedux?._id).map((el)=>(<User user={el}/>))}
            </tbody>
            <tfoot>
              <tr>
                <th>Photo</th>
                <th>Non</th>
                <th>Prénom </th>
                <th>Date de naissance</th>
                <th>Addresse email</th>
                <th>Numero de télephone</th>
                <th>Actions</th>
              </tr>
            </tfoot>
          </table>
      </div>
    );
}

export default UsersList;
