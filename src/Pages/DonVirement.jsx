import React, {Fragment, useEffect, useState} from "react";
import '../assets/paiment/css/style.css'
import { ToastContainer, toast } from "react-toastify";

function DonVirement(){
  useEffect(()=>{
    window.scrollTo(0,0)
},[])

const [nomcomplet,setNomcomplet] = useState("");
const [email,setEmail] = useState("");
const [addresse,setAddresse] = useState("");
const [montant,setMontant] = useState("");
const [modepaiement,setModepaiement] = useState("");
const [zip,setZip] = useState("");
const [numcompte,setNumcompte] = useState("Numéro de compte : 12345678910");
const [nombanque,setNombanque] = useState("Nom de la banque : UIB");
const [iban,setIban] = useState("Code IBAN/SWIFT : TN59 1234567891011121314");
const [note,setNote] = useState("");

// Form Submit Handler
const formsubmitHandler = (e) => {
    e.preventDefault();
    if(nomcomplet.trim() === "") toast.error("Le nom complet est requis")
    if(email.trim() === "") toast.error("L'email est requis")
    if(addresse.trim() === "") toast.error("L'addresse d'expiration est requis")
    if(zip.trim() === "") toast.error("Le code zip est requis")
    if(montant.trim() === "") toast.error("Le montant de stockage est requis")
    if(modepaiement.trim() === "") toast.error("Le mode de paiement est requis")
    if(numcompte.trim() === "") toast.error("Le numero de compte est requis")
    if(nombanque.trim() === "") toast.error("La nom de banque est requis")
    if(iban.trim() === "") toast.error("Le Code IBAN/SWIFT est requis")
}
          return (
            <Fragment>
            <ToastContainer/>                                          
        <div>
  <section style={{ backgroundColor: "#1181b2" }} className="ftco-section">
    <div className="container">
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
                    INCLURE LES DONNÉES DE VIREMENT
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
                            name="name"
                            id="nom"
                            placeholder="Nom complet"
                            value={nomcomplet}
                            onChange={(e) => setNomcomplet(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            style={{marginBottom:'16px'}}
                            name="email"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            style={{marginBottom:'16px'}}
                            name="subject"
                            id="addresse"
                            placeholder="Addresse"
                            value={addresse}
                            onChange={(e) => setAddresse(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            style={{marginBottom:'16px'}}
                            name="subject"
                            id="zip"
                            placeholder="ZIP"
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            style={{marginBottom:'16px'}}
                            name="subject"
                            id="montant"
                            placeholder="Montant en DT"
                            value={montant}
                            onChange={(e) => setMontant(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            style={{marginBottom:'16px'}}
                            name="subject"
                            id="mode-paiment"
                            placeholder="Mode de paiement  (Exp: virement bancaire, chèque..)"
                            value={modepaiement}
                            onChange={(e) => setModepaiement(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            style={{marginBottom:'16px'}}
                            name="subject"
                            id="numero-compte"
                            defaultValue="Numéro de compte : 12345678910"
                            disabled="disabled"
                            value={numcompte}
                            onChange={(e) => setNumcompte(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            style={{marginBottom:'16px'}}
                            name="subject"
                            id="nom-banque"
                            defaultValue="Nom de la banque : UIB"
                            disabled="disabled"
                            value={nombanque}
                            onChange={(e) => setNombanque(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            style={{marginBottom:'16px'}}
                            name="subject"
                            id="iban"
                            defaultValue="Code IBAN/SWIFT : TN59 1234567891011121314"
                            disabled="disabled"
                            value={iban}
                            onChange={(e) => setIban(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            className="form-control"
                            style={{marginBottom:'16px'}}
                            id="message"
                            cols={30}
                            rows={4}
                            placeholder="Note : Ajouter une remarque ici.."
                            defaultValue={""}
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
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



export default DonVirement;