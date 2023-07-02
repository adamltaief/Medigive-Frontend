import React, {Fragment, useEffect, useState} from "react";
import '../assets/forms/demandeaide/style.css'
import { ToastContainer, toast } from "react-toastify";
function PropAide(){
    
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

const [disponibilite,setDisponibilite] = useState("");
const [zonegeo,setZonegeo] = useState("");
const [secteur,setSecteur] = useState("");
const [message,setMessage] = useState("");


// Form Submit Handler
const formsubmitHandler = (e) => {
    e.preventDefault();
    if(disponibilite.trim() === "") toast.error("Le nom complet est requis")
    if(zonegeo.trim() === "") toast.error("La zone géographique de disponibilité est requis")
    if(secteur.trim() === "") toast.error("L'email est requis")
    
}
          return (
            <Fragment>
            <ToastContainer/>              
            <div>
              <section style={{ backgroundColor: "#1484b4" }} className="ftco-section">
                <div style={{ height: 630 }} className="container">
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
                                INSERER LES INFORMATIONS DE VOTRE PROPOSITION D'AIDE
                                </h3>
                                <div
                                id="form-message-warning"
                                className="mb-4 w-100 text-center"
                                />
                                <div
                                id="form-message-success"
                                className="mb-4 w-100 text-center"
                                >
                                Votre demande est envoyee, merci!
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
                                        placeholder="Disponibilité"
                                        value={disponibilite}
                                        onChange={(e) => setDisponibilite(e.target.value)}
                                        />
                                    </div>
                                    </div>
                                    <div className="col-md-12">
                                    <div className="form-group">
                                        <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Zone géographique de disponibilité"
                                        value={zonegeo}
                                        onChange={(e) => setZonegeo(e.target.value)}
                                        />
                                    </div>
                                    </div>
                                    <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea
                                        className="form-control"
                                        cols={30}
                                        rows={4}
                                        placeholder="Comment souhaitez-vous aider?"
                                        defaultValue={""}
                                        value={secteur}
                                        onChange={(e) => setSecteur(e.target.value)}
                                        />
                                    </div>
                                    </div>
                                    <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea
                                        className="form-control"
                                        cols={30}
                                        rows={4}
                                        placeholder="Message supplémentaire"
                                        defaultValue={""}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        />
                                    </div>
                                    </div>
                                    <div className="col-md-12">
                                    <div className="form-group">
                                        <input
                                        type="submit"
                                        defaultValue="Envoyer"
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



export default PropAide;