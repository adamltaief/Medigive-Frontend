import React, {Fragment, useEffect, useState} from "react";
import '../assets/forms/demandeaide/style.css'
import { toast, ToastContainer } from "react-toastify";

function DemandeAide(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    
    const [type,setType] = useState("");
    const [description,setDescription] = useState("");

    // Form Submit Handler
    const formsubmitHandler = (e) => {
        e.preventDefault();
        if(type.trim() === "") toast.error("Le type est requis")
        if(description.trim() === "") toast.error("La description est requis")
    }

          return (
            <Fragment>
            <ToastContainer/>
        <div>
        <section style={{ backgroundColor: "#1484b4" }} className="ftco-section">
            <div style={{ height: 460 }} className="container">
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
                            INSERER LES INFORMATIONS DE VOTRE DEMANDE D'AIDE
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
                            onSubmit={formsubmitHandler}
                            method="POST"
                            id="contactForm"
                            name="contactForm"
                            className="contactForm"
                            >
                            <div className="row">
                                <div className="col-md-12">
                                <div className="form-group">
                                    <input
                                    type="text"
                                    className="form-control"
                                    style={{marginBottom:'16px'}}
                                    placeholder="Type (Médicament ou Appareil médicale)"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    />
                                </div>
                                </div>
                                <div className="col-md-12">
                                <div className="form-group">
                                    <textarea
                                    type="text"
                                    className="form-control"
                                    style={{marginBottom:'16px'}}                                    
                                    cols={30}
                                    rows={4}
                                    placeholder="Description détaillée de la condition médicale et de la nécessité du don.."
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
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



export default DemandeAide;