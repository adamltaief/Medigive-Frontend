import React, {Fragment, useEffect, useState} from "react";
import '../assets/forms/demandeaide/style.css'
import { ToastContainer, toast } from "react-toastify";
function DemandeDon(){
  useEffect(()=>{
    window.scrollTo(0,0)
},[])

const [titre,setTitre] = useState("");
const [description,setDescription] = useState("");

// Form Submit Handler
const formsubmitHandler = (e) => {
    e.preventDefault();
    if(titre.trim() === "") toast.error("Le titre est requis")
    if(description.trim() === "") toast.error("La description est requis")
}

          return (
            <Fragment>
            <ToastContainer/>              
        <div>
        <title>S'inscrire Nécessiteux</title>
        <section style={{ backgroundColor: "#1484b4" }} className="ftco-section">
  <div style={{ height: 450, marginBottom: "100PX" }} className="container">
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
                  FAIRE UNE DEMANDE DON POUR CE PRODUIT
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
                          type="email"
                          className="form-control"
                          style={{marginBottom:'16px'}}
                          placeholder="Titre de demande"
                          value={titre}
                          onChange={(e) => setTitre(e.target.value)}
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



export default DemandeDon;