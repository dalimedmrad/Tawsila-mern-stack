import React,{ useEffect, useRef, useState }  from "react";
import './Profile.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { Form,Button } from 'react-bootstrap';
import { updateUser } from "../../JS/userslice/userSlice";
import { TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import uploadImg from '../../assets/cloud-upload-regular-240.png';



const Profile =  () => {
    const dispatch = useDispatch();
    const wrapperRef = useRef(null);
    const userRedux = useSelector((state) => state.user.user);
    const [User,setUser] = useState({name:"",lastName:"",email:"",image:"",phone:"",date_naiss:"",});
    const onDragEnter = () => wrapperRef.current.classList.add('dragover');
    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');
    const onDrop = () => wrapperRef.current.classList.remove('dragover');
    useEffect(() => {
        setUser(userRedux);
    }, [userRedux]);

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        const bodyFormData = new FormData();
        bodyFormData.append("file", file);
        const { data } = await axios.post(
          "http://localhost:5000/api/user/upload",
          bodyFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        setUser({...User,image:data});
    };
  
    const handleUpdate = () => {
        dispatch(updateUser(User));
        window.location.reload()
    }
    const check = ()=>{
        if(User.name === '' ||User.lastName === '' || User.email === '' || User.phone === ''){
            alert('vérifiez à nouveau s\'\il vous plaît !!');
        }else{handleUpdate();}
    }
    const useStyles = makeStyles((theme) => ({
        textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          width: 400,
        },
      }));
    const classes = useStyles();
    return(
        <div className="col-md-11 offset-1">
            <div className="row mt-3">
                <div className="col-6">
                    <div className="row">
                        <div className="col-10 box">
                            <div    ref={wrapperRef}
                                    className="drop-file-input"
                                    onDragEnter={onDragEnter}
                                    onDragLeave={onDragLeave}
                                    onDrop={onDrop}>
                                <div className="drop-file-input__label">
                                    <img src={uploadImg}/>
                                    <p>Choisir une photo de profile</p>
                                </div>
                                <input onChange={uploadFileHandler} type="file"  name='file'/>
                            </div>
                        </div>
                    </div>                   
                </div>
                <div className="col-md-6">
                    <img className={(userRedux?.image || User?.image)? 'avatar':null} src={User?.image?`http://localhost:5000${User?.image}`: null}/>
                </div>
            </div>
            <div>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Nom : <b>*</b></Form.Label>
                        <input
                        className="form-control"
                        name="name"
                        value={User?.name}
                        type="text" 
                        onChange={(e)=>setUser({...User,name:e.target.value})}
                        />          
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Prenom : <b>*</b></Form.Label>
                        <input
                        className="form-control"
                        type="text" 
                        value={User?.lastName}
                        onChange={(e)=>setUser({...User,lastName:e.target.value})}
                        />          
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Addresse email : <b>*</b></Form.Label>
                        <input
                        className="form-control"
                        type="email" 
                        value={User?.email}
                        onChange={(e)=>setUser({...User,email:e.target.value})}
                        />          
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Numero de téléphone : <b>*</b></Form.Label>
                        <input
                        className="form-control"
                        type="text" 
                        value={User?.phone} 
                        onChange={(e)=>setUser({...User,phone:e.target.value})}
                        />          
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Date de naissance :</Form.Label><br/>
                        <TextField
                            id="date"
                            label=""
                            type="date"
                            value={User?.date_naiss} 
                            onChange={(e)=>{setUser({...User,date_naiss:e.target.value})}}
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />          
                    </Form.Group>
                    <Button variant="success" onClick={check}>
                        Enregistrer
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Profile;