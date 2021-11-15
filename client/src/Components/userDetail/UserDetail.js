import React, { useEffect, useState } from 'react'
import { Modal,Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getOneById } from '../../JS/userslice/userSlice';

const UserDetail = ({id}) => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(()=>{
        dispatch(getOneById(id))
    },[])
    const UserDetail = useSelector(state => state.user.userDetail);
    return (
        <div>
      <Button variant='success' onClick={handleShow}>
        Modifier
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier Trajet</Modal.Title>
        </Modal.Header>
        <Modal.Body className='inps'>
          <label>Depart :</label>
          <input
            className="form-control"
            type='text'
            value={UserDetail?.name}
          />

        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Fermer
          </Button>
          
        </Modal.Footer>
      </Modal>
    </div>
    )
}

export default UserDetail
