import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch} from "react-redux";
import { modifierTrajet } from "../JS/trajetslice/trajetSlice";

const EditTrajet = ({ tj }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [Data,setData] = useState({
    depart:"",
    arrive:"",
    date_dep:"",
    nombredepassage:"",
    prix:"",
    modelvoiture:"",
    couleurvoiture:"",
    description:"",
    createdBy:''
  });
  useEffect(() => {
     setData(tj);
  }, []);
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
            value={Data.depart}
            onChange={(e) => setData({ ...Data, depart: e.target.value })}
          />
          <label>Arrivée :</label>
          <input
            className="form-control"
            type='text'
            value={Data.arrive}
            onChange={(e) => setData({ ...Data, arrive: e.target.value })}
          />
          <label>Date de Depart :</label>
          <input
          className="form-control"
            type='date'
            value={Data.date_dep}
            onChange={(e) => setData({ ...Data, date_dep: e.target.value })}
          />
          <label>Nombre de places :</label>
          <input
          className="form-control"
            type='number'
            value={Data.nombredepassage}
            onChange={(e) => setData({ ...Data, nombredepassage: e.target.value })}
          />
          <label>Prix par place en (DT) :</label>
          <input
          className="form-control"
            type='number'
            value={Data.prix}
            onChange={(e) => setData({ ...Data, prix: e.target.value })}
          />
          <label>Model de voiture :</label>
          <input
          className="form-control"
            type='text'
            value={Data.modelvoiture}
            onChange={(e) => setData({ ...Data, modelvoiture: e.target.value })}
          />
          <label>Couleur de voiture :</label>
          <input
          className="form-control"
            type='text'
            value={Data.couleurvoiture}
            onChange={(e) => setData({ ...Data, couleurvoiture: e.target.value })}
          />
          <label>Description de trajet :</label>
          <textarea
            className="form-control"
            value={Data.description}
            onChange={(e) => setData({ ...Data, description: e.target.value })}></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Fermer
          </Button>
          <Button
            variant='primary'
            onClick={() => {dispatch(modifierTrajet(Data));handleClose();window.location.reload()}}>
            Enregistrer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditTrajet;
