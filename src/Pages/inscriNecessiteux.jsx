    import React, {Fragment, useEffect, useState} from "react";
    import '../assets/forms/css/styles.css'
    import '../assets/forms/css/style.css.map'
    import '../assets/forms/fonts/material-icon/css/material-design-iconic-font.min.css'
    import signupimage from '../assets/forms/images/Ness.png'
    import '../assets/main/Css/Styles.css';
    import '../assets/main/Css/Styles2.css';
import { ToastContainer, toast } from "react-toastify";

function InscriNecessiteux(){
  useEffect(()=>{
    window.scrollTo(0,0)
},[])

const [nom,setNom] = useState("");
const [prenom,setPrenom] = useState("");
const [sexe,setSexe] = useState("");
const [datenaissance,setDatenaissance] = useState("");
const [addresse,setAddresse] = useState("");
const [ville,setVille] = useState("");
const [zip,setZip] = useState("");
const [numtlf,setNumtlf] = useState("");
const [situation,setSituation] = useState("");
const [description,setDescription] = useState("");
const [email,setEmail] = useState("");
const [mot_de_passe,setMotdepasse] = useState("");

// Form Submit Handler
const formsubmitHandler = (e) => {
    e.preventDefault();

    if(nom.trim() === "") toast.error("Le nom est requis")
    if(prenom.trim() === "") toast.error("Le prenom complet est requis")
    if(sexe.trim() === "") toast.error("Le nom sexe est requis")
    if(datenaissance.trim() === "") toast.error("Le date de naissance est requis")
    if(addresse.trim() === "") toast.error("L'addresse d'expiration est requis")
    if(ville.trim() === "") toast.error("La ville est requis")
    if(zip.trim() === "") toast.error("Le code zip est requis")
    if(numtlf.trim() === "") toast.error("Le numéro de téléphone est requis")
    if(situation.trim() === "") toast.error("La situation est requis")
    if(description.trim() === "") toast.error("La description est requis")
    if(email.trim() === "") toast.error("L'email est requis")
    if(mot_de_passe.trim() === "") toast.error("Le mot de passe est requis")

    if (
      nom.trim() !== "" &&
      prenom.trim() !== "" &&
      sexe.trim() !== "" &&
      datenaissance.trim() !== "" &&
      addresse.trim() !== "" &&
      ville.trim() !== "" &&
      zip.trim() !== "" &&
      numtlf.trim() !== "" &&
      situation.trim() !== "" &&
      description.trim() !== "" &&
      email.trim() !== "" &&
      mot_de_passe.trim() !== ""
    ) {
      // All form fields are filled, generate the constant type=necessiteux
      const type = "necessiteux";

      // Store the type in localStorage
      localStorage.setItem("type", type);
        console.log(type);
    }
}
              return (
                <Fragment>
              <ToastContainer/>              
                  <div style={{backgroundColor: '#1181b2'}}>
                  <title>S'inscrire Nécessiteux</title>
                  <div style={{backgroundColor: '#1181b2',fontFamily:'open sans'}} className="main">
                    <section className="signup">
                      <div style={{backgroundColor: '#1181b2',fontFamily:'open sans'}} className="containe">
                        <div className="signup-content">
                          <div className="signup-form">
                            <h2 style={{color:'white'}} className="form-title">S'inscrire comme un Nécessiteux</h2>
                            
                            <form method={'POST'} 
                            action="index.js" 
                            className="register-form" 
                            id="register-form"
                            onSubmit={formsubmitHandler}                                                      

                            >
                              <div className="form-group">
                                <label  style={{color:'white'}} htmlFor="first"><i className="zmdi zmdi-account material-icons-name" /></label>
                                <input 
                                style={{backgroundColor: '#1181b2' ,color:'white',borderBlockColor:'white'}} 
                                type="text" 
                                placeholder="Nom"
                                value={nom}
                                onChange={(e) => setNom(e.target.value)} 
                                />

                              </div>
                              <div className="form-group">
                                <label  style={{color:'white'}} htmlFor="second"><i className="zmdi zmdi-account material-icons-name" /></label>
                                <input 
                                style={{backgroundColor: '#1181b2' ,color:'white',borderBlockColor:'white'}} 
                                type="text" 
                                placeholder="Prénom" 
                                value={prenom}
                                onChange={(e) => setPrenom(e.target.value)}

                                />

                              </div>
                              <div className="form-group">
                                <input 
                                style={{backgroundColor: '#1181b2' ,color:'white',borderBlockColor:'white'}} 
                                type="radio" 
                                id="sexeChoice1" 
                                name="sexe" defaultValue="male" 
                                value={sexe}
                                onChange={(e) => setSexe(e.target.value)}
                                />


                                <label  style={{color:'white'}} htmlFor="sexeChoice1">Male</label>
                              </div>
                              <div className="form-group">
                                <input 
                                style={{backgroundColor: '#1181b2' ,color:'white',borderBlockColor:'white'}} 
                                type="radio" 
                                id="sexeChoice2" 
                                name="sexe" 
                                defaultValue="femelle" 
                                value={sexe}
                                onChange={(e) => setSexe(e.target.value)}
                                
                                />

                                <label  style={{color:'white'}} htmlFor="sexeChoice2">Femelle</label>
                              </div>
                              <div className="form-group">
                                <label  style={{color:'white'}} htmlFor="date"><i className="zmdi zmdi-calenda-note" /></label>
                                <input 
                                style={{backgroundColor: '#1181b2' ,color:'white',borderBlockColor:'white'}} 
                                type="date" 
                                placeholder="Your Email" 
                                value={datenaissance}
                                onChange={(e) => setDatenaissance(e.target.value)}
                                />

                              </div>
                              <div className="form-group">
                                <label  style={{color:'white'}} htmlFor="addresse"><i className="zmdi zmdi-pin" /></label>
                                <input 
                                style={{backgroundColor: '#1181b2' ,color:'white',borderBlockColor:'white'}} 
                                type="text"
                                placeholder="Adresse"
                                value={addresse}
                                onChange={(e) => setAddresse(e.target.value)}
                                />

                                <input 
                                style={{backgroundColor: '#1181b2' ,color:'white',borderBlockColor:'white'}} 
                                type="text"
                                placeholder="Ville"
                                value={ville}
                                onChange={(e) => setVille(e.target.value)}
                                />

                                <input 
                                style={{backgroundColor: '#1181b2' ,color:'white',borderBlockColor:'white'}} 
                                type="number" 
                                placeholder="Zip"
                                value={zip}
                                onChange={(e) => setZip(e.target.value)}
                                />

                              </div>
                              <div className="form-group">
                                <label  style={{color:'white'}} htmlFor="num"><i className="zmdi zmdi-phone" /></label>
                                <input 
                                style={{backgroundColor: '#1181b2' ,color:'white',borderBlockColor:'white'}} 
                                type="number"
                                placeholder="Numéro de téléphone"
                                value={numtlf}
                                onChange={(e) => setNumtlf(e.target.value)}
                                /> 

                              </div>

                              <div className="form-group">
                                <label  style={{color:'white'}} htmlFor="situation"><i /></label>
                                <textarea 
                                style={{backgroundColor: '#1181b2' ,color:'white',borderBlockColor:'white'}} 
                                rows={4} 
                                cols={38} 
                                placeholder="Situation"
                                value={situation}
                                onChange={(e) => setSituation(e.target.value)}
                                /> 

                              </div>
                              <div className="form-group">
                                <label  style={{color:'white'}} htmlFor="description"><i /></label>
                                <textarea 
                                style={{backgroundColor: '#1181b2' ,color:'white',borderBlockColor:'white'}} 
                                rows={4} 
                                cols={38} 
                                placeholder="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                /> 

                              </div>
                              <div className="form-group">
                                <label  style={{color:'white'}} htmlFor="email"><i className="zmdi zmdi-email" /></label>
                                <input 
                                style={{backgroundColor: '#1181b2' ,color:'white',borderBlockColor:'white'}} 
                                type="email" 
                                placeholder="E-mail" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                /> 

                              </div>
                              <div className="form-group">
                                <label  style={{color:'white'}} htmlFor="pass"><i className="zmdi zmdi-lock" /></label>
                                <input style={{backgroundColor: '#1181b2' ,color:'white',borderBlockColor:'white'}} 
                                type="password" 
                                placeholder="Mot de passe" 
                                value={mot_de_passe}
                                onChange={(e) => setMotdepasse(e.target.value)}
                                /> 

                              </div>
                              
                              <div className="form-group">
                                <input 
                                style={{backgroundColor: '#1181b2' ,color:'white',borderBlockColor:'white'}} 
                                type="checkbox" 
                                name="agree-term" 
                                id="agree-term" 
                                className="agree-term" 
                                
                                /> 

                                <label  style={{color:'white'}} htmlFor="agree-term" className="label-agree-term"><span><span /></span>Je suis d'accord avec toutes les déclarations dans  <a  style={{color:'white'}} href={signupimage} className="term-service">Conditions d'utilisation</a></label>
                              </div>
                              <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="S'inscrire" />
                              </div>
                            </form>
                          </div>
                          <div className="signup-image">
                            <figure><img src={signupimage} alt="sing up" /></figure>
                            <a  style={{color:'white'}} href={signupimage} className="signup-image-link">Je suis déjà membre</a>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div></Fragment>
                
              );
            }
    
    

export default InscriNecessiteux;