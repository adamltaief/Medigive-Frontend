import React , {Fragment, useEffect, useState}from "react";
import '../assets/forms/css/styles.css'
import '../assets/forms/css/style.css.map'
import '../assets/main/Css/Styles.css';
import '../assets/main/Css/Styles2.css';
import '../assets/forms/fonts/material-icon/css/material-design-iconic-font.min.css'
import loginimg from '../assets/forms/images/signinimage.png'
import { ToastContainer, toast } from "react-toastify";

function Identifier(){
  useEffect(()=>{
    window.scrollTo(0,0)
},[])

const [email,setEmail] = useState("");
const [mot_de_passe,setMotdepasse] = useState("");

// Form Submit Handler
const formsubmitHandler = (e) => {
    e.preventDefault();
    if(email.trim() === "") toast.error("L'email est requis")
    if(mot_de_passe.trim() === "") toast.error("Le mor de passe est requis")
    
}

    return(
      <Fragment>
        <ToastContainer/>                                                  
        <div style={{backgroundColor: '#1181b2'}} className="main">
          <section className="sign-in">
            <div style={{backgroundColor: '#1181b2',fontFamily:'open sans'}} className="containe">
              <div className="signin-content">
                <div className="signin-image">
                  <figure><img src={loginimg} alt="sing up" /></figure>
                  <a  style={{color:'white'}} href={loginimg} className="signup-image-link">Créer un compte</a>
                </div>
                <div className="signin-form">
                  <h2 style={{color:'white'}} className="form-title">S'identifier</h2>
                  <form 
                      method="POST" 
                      action={{}} 
                      className="register-form" 
                      id="login-form"
                      onSubmit={formsubmitHandler}                                                      
                      >
                    <div className="form-group">
                      <label style={{color:'white'}} htmlFor="email"><i className="zmdi zmdi-email" /></label>
                      <input 
                          style={{backgroundColor: '#1181b2' ,color:'white',borderBlockColor:'white'}} 
                          type="email" 
                          placeholder="E-mail"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          />
                          
                    </div>
                    <div className="form-group">
                      <label 
                          style={{color:'white'}}
                          htmlFor="your_pass"><i 
                          className="zmdi zmdi-lock" />
                          </label>
                      <input 
                          style={{backgroundColor: '#1181b2' ,color:'white',borderBlockColor:'white'}} 
                          type="password" 
                          name="your_pass" 
                          id="your_pass" 
                          placeholder="Mot de passe"
                          value={mot_de_passe}
                          onChange={(e) => setMotdepasse(e.target.value)}
                          />
                    </div>
                    <div className="form-group">
                      <input 
                          type="checkbox" 
                          name="remember-me" 
                          id="remember-me" 
                          className="agree-term" />
                      <label 
                          style={{color:'white'}} 
                          htmlFor="remember-me" 
                          className="label-agree-term">
                            <span>
                              <span />
                              </span>
                              Souviens-toi de moi
                              </label>
                    </div>
                    <div className="form-group form-button">
                      <input type="submit" name="signin" id="signin" className="form-submit" value="S'identifier" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        
      </div>
      </Fragment>
    
      );
}

export default Identifier;
