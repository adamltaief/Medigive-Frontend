
import React ,{Fragment} from "react";
import Logo from '../..//assets/main/Images/LOGO.png';
import { Link } from "react-router-dom";
function Menu(){
    let hr={
        void:'#',
        section8:'#section8',
        connecter:'http://127.0.0.1:5500/se-connecter/se-connecter.html.html',
        section4:"#section4",
        section3:'#section3',
        section7:'#section7',
        svgee08:'#svg-ee08',
        svg5013:'#svg-5013',
        Sectionup:'#Sectionup',
        }
    return(
    <Fragment>
        <div>
            <nav style={{backgroundColor: '#1181b2', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',position: 'fixed', top: '0', width: '100%', zIndex: '1'}}>
                <div style={{listStyleType: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center'}}>
                    <img href={hr.void} src={Logo} alt="Your Logo" style={{height: '30px',marginLeft: '20px'}} />
                    <li style={{marginLeft: '10px'}}><Link to={'/'} style={{fontSize: '14px',fontWeight: 'bold',color:'white',fontFamily:'open sans'}}>MediGive</Link></li>
                </div>
                    <div>
                        <i className="bi bi-list"></i>
                    </div>
                <ul style={{listStyleType: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center'}}>
                    <li style={{marginRight: '25px'}}><a href={hr.section3} style={{fontSize: '14px',color:'white',fontFamily:'open sans'}}>A propos de nous</a></li>
                    <li style={{marginRight: '25px'}}><a href={hr.void} style={{fontSize: '14px',color:'white',fontFamily:'open sans'}}>Reagir avec nous</a></li>
                    <li style={{marginRight: '25px'}}><a href={hr.section8} style={{fontSize: '14px',color:'white',fontFamily:'open sans'}}>Contact</a></li>
                    <li style={{marginRight: '25px'}}><Link to={'/faire-don'} style={{fontSize: '14px',color:'white',fontFamily:'open sans'}}>Faire un don</Link></li>
                    <li style={{marginRight: '25px'}}><Link to={'/liste-besoins'} style={{fontSize: '14px',color:'white',fontFamily:'open sans'}}>Liste des besoins</Link></li>
                    <li style={{marginRight: '25px'}}><Link to={'/'} style={{fontSize: '14px',color:'white',fontFamily:'open sans'}}>Evenements</Link></li>
                    <li style={{marginRight: '25px'}}><Link to={'/listedisponibles'} style={{fontSize: '14px',color:'white',fontFamily:'open sans'}}>Liste des disponibles</Link></li>
                    <li style={{marginRight: '25px'}}><Link to={'/demande-aide'} style={{fontSize: '14px',color:'white',fontFamily:'open sans'}}>Demander l'aide</Link></li>
                    <li style={{marginRight: '25px'}}><Link to={'/inscritype'} style={{fontSize: '14px',color:'white',fontFamily:'open sans',fontWeight: 'bold'}}>S'inscrire</Link></li>
                    <li style={{marginRight: '25px'}}><Link to={'/se-connecter'} style={{fontSize: '14px',fontWeight: 'bold',color:'white',fontFamily:'open sans'}}>Se connecter</Link></li>
                </ul>
            </nav>
        </div>
    </Fragment>


    )
}
export default Menu;