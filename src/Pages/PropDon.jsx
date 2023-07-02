import React, {Fragment, useEffect, useState} from "react";
import '../assets/paiment/css/style.css';
import { ToastContainer, toast } from "react-toastify";

function PropDon(){
  useEffect(()=>{
    window.scrollTo(0,0)
},[])

const [libelle,setLibelle] = useState("");
const [quantite,setQuantite] = useState("");
const [dateexpiration,setDateexpiration] = useState("");
const [lieustockage,setLieustockage] = useState("");
const [posologie,setPosologie] = useState("");
const [maladie,setMaladie] = useState("");
const [description,setDescription] = useState("");


// Form Submit Handler
const formsubmitHandler = (e) => {
    e.preventDefault();
    if(libelle.trim() === "") toast.error("Le libelle est requis")
    if(quantite.trim() === "") toast.error("La quantite est requis")
    if(dateexpiration.trim() === "") toast.error("La date d'expiration est requis")
    if(lieustockage.trim() === "") toast.error("Le lieu de stockage est requis")
    if(posologie.trim() === "") toast.error("L'etat est requis")
    if(maladie.trim() === "") toast.error("La maladie est requis")
    if(description.trim() === "") toast.error("La description est requis")
}

          return (
            <Fragment>
            <ToastContainer/>                            

          <div>
        <title>Faire un virement</title>
  <section style={{ backgroundColor: "#1181b2" }} className="ftco-section">
    <div className="container"  style={{height:'730px'}}>
      <div className=" justify-content-center">
        <div className="col-md-6 text-center mb-5">
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-12">
          <div className="wrapper">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="contact-wrap">
                  <h3
                    style={{
                      color: "#333",
                      fontFamily:
                        '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
                      fontSize: 25
                    }}
                    className="mb-4 text-center"
                  >
                    INSÉRER LES DONNÉES DE VOTRE DEMANDE D'AIDE
                  </h3>
                  <div
                    id="form-message-warning"
                    className="mb-4 w-100 text-center"
                  />
                  <div
                    id="form-message-success"
                    className="mb-4 w-100 text-center"
                  >
                    Votre virement est envoyee, merci!
                  </div>
                  <form
                    method="POST"
                    id="contactForm"
                    name="contactForm"
                    className="contactForm"
                    onSubmit={formsubmitHandler}                                    

                  >
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            style={{marginBottom:'16px'}}
                            placeholder="Libellé"
                            value={libelle}
                            onChange={(e) => setLibelle(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            style={{marginBottom:'16px'}}
                            placeholder="Quantité"
                            value={quantite}
                            onChange={(e) => setQuantite(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            style={{marginBottom:'16px'}}
                            placeholder="Date d'expiration"
                            value={dateexpiration}
                            onChange={(e) => setDateexpiration(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            style={{marginBottom:'16px'}}
                            placeholder="Lieu de stockage"
                            value={lieustockage}
                            onChange={(e) => setLieustockage(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            style={{marginBottom:'16px'}}
                            placeholder="Posologie (en cas de medicament)"
                            value={posologie}
                            onChange={(e) => setPosologie(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            style={{marginBottom:'16px'}}
                            placeholder="Maladie (en cas de medicament)"
                            value={maladie}
                            onChange={(e) => setMaladie(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            style={{marginBottom:'16px'}}
                            cols={30}
                            rows={4}
                            placeholder="Description.."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="submit"
                            defaultValue="Submit"
                            className="btn btn-primary"
                          />
                          <div className="submitting" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      </div>
  </Fragment>
            
          );
        }



export default PropDon;