import React, { useEffect, useState } from "react";
import './addTrajet.css'
import { useDispatch, useSelector } from 'react-redux'
import { ajouterTrajet } from "../../JS/trajetslice/trajetSlice";
import { Alert } from "react-bootstrap";


const AddTrajet = () => {

 const userRedux = useSelector((state) => state.user.user);
 const [Data,setData] = useState({
  depart: "",
  arrive: "",
  date_dep: "",
  nombredepassage: "",
  prix: "",
  modelvoiture: "",
  couleurvoiture: "",
  description: "",
  createdBy:''
});
useEffect(() => {
  setData({...Data,createdBy:userRedux?._id})
  const slidePage = document.querySelector(".slide-page");
  const nextBtnFirst = document.querySelector(".firstNext");
  const prevBtnSec = document.querySelector(".prev-1");
  const nextBtnSec = document.querySelector(".next-1");
  const prevBtnThird = document.querySelector(".prev-2");
  const nextBtnThird = document.querySelector(".next-2");
  const prevBtnFourth = document.querySelector(".prev-3");
  // const submitBtn = document.querySelector(".submit");
  const progressText = document.querySelectorAll(".step p");
  const progressCheck = document.querySelectorAll(".step .check");
  const bullet = document.querySelectorAll(".step .bullet");
  let current = 1;
  
  nextBtnFirst.addEventListener("click", function(event){
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  });
  nextBtnSec.addEventListener("click", function(event){
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  });

  nextBtnThird.addEventListener("click", function(event){
    event.preventDefault();
    slidePage.style.marginLeft = "-75%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  });

  // submitBtn.addEventListener("click", function(){
  //   bullet[current - 1].classList.add("active");
  //   progressCheck[current - 1].classList.add("active");
  //   progressText[current - 1].classList.add("active");
  //   current += 1;
  //   setTimeout(function(){
  //     alert("Your Form Successfully Signed up");
  //   },800);
  // });
  
  prevBtnSec.addEventListener("click", function(event){
    event.preventDefault();
    slidePage.style.marginLeft = "0%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
  });
  prevBtnThird.addEventListener("click", function(event){
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
  });
  prevBtnFourth.addEventListener("click", function(event){
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
  });
 }, [userRedux]);

const dispatch = useDispatch()
const handleadd =(e)=>{
  e.preventDefault()
  dispatch(ajouterTrajet(Data));
  window.location.reload();
}
  
  return(
    <div className="bddd">
      <div className="container col-md-12">
          <header>Ajouter une trajet</header>
          <div className="progress-bar">
            <div className="step">
              <p>
                Name
              </p>
              <div className="bullet">
                <span>1</span>
              </div>
              <div className="check fas fa-check" />
            </div>
            <div className="step">
              <p>
                Contact
              </p>
              <div className="bullet">
                <span>2</span>
              </div>
              <div className="check fas fa-check" />
            </div>
            <div className="step">
              <p>
                Birth
              </p>
              <div className="bullet">
                <span>3</span>
              </div>
              <div className="check fas fa-check" />
            </div>
            <div className="step">
              <p>
                Submit
              </p>
              <div className="bullet">
                <span>4</span>
              </div>
              <div className="check fas fa-check" />
            </div>
          </div>
          <div className="form-outer">
            <form>
              <div className="page slide-page">
                <div className="field">
                  <div className="label">
                    Quelle est votre point de depart :
                  </div>
                  <input type="text" onChange={(e)=>setData({...Data,depart:e.target.value})} minLength="6" maxLength="8" required="required"/>
                </div>
                <div className="field">
                  <div className="label">
                    Quelle est votre point d'arrivé : 
                  </div>
                  <input type="text"  onChange={(e)=>setData({...Data,arrive:e.target.value})}/>
                </div>
                <div className="field">
                  <button className="firstNext next">Suivant</button>
                </div>
              </div>
              <div className="page">
                <div className="field">
                  <div className="label">
                    Quelle est votre date de depart :
                  </div>
                  <input type="date" onChange={(e)=>setData({...Data,date_dep:e.target.value})} />
                </div>
                <div className="field">
                  <div className="label">
                    Quelle est le nombre de places  :
                  </div>
                  <input type="Number" onChange={(e)=>setData({...Data,nombredepassage:e.target.value})} />
                </div>
                <div className="field btns">
                  <button className="prev-1 prev">Précédent</button>
                  <button className="next-1 next">Suivant</button>
                </div>
              </div>
              <div className="page">
                <div className="field">
                  <div className="label">
                  Quelle est votre prix par place :
                  </div>
                  <input type="number" onChange={(e)=>setData({...Data,prix:e.target.value})}/>
                </div>
                <div className="field">
                  <div className="label">
                    Quelle est votre model de voiture :
                  </div>
                  <input type="text" onChange={(e)=>setData({...Data,modelvoiture:e.target.value})}/>
                </div>
                <div className="field btns">
                  <button className="prev-2 prev">Précédent</button>
                  <button className="next-2 next">Suivant</button>
                </div>
              </div>
              <div className="page">
                <div className="field">
                  <div className="label">
                    Quelle est votre couleur de voiture :
                  </div>
                  <input type="text" onChange={(e)=>setData({...Data,couleurvoiture:e.target.value})} />
                </div>
                <div className="field">
                  <div className="label">
                    Description :
                  </div>
                  <textarea  type="text" onChange={(e)=>setData({...Data,description:e.target.value})}/>
                </div>
                <div className="field btns">
                  <button className="prev-3 prev">Précédent</button>
                  <button  onClick={handleadd}>Enregistrer</button>
                </div>
              </div>
            </form>
          </div>
      </div>
    </div>
  )

}

export default AddTrajet;
