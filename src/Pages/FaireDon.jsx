import React, {Fragment, useEffect} from 'react';
import '../assets/main/Css/Styles.css';
import '../assets/main/Css/Styles2.css';
import { Link } from 'react-router-dom';

import ico1 from '../assets/main/Images/1077976-30c5a9ad.png';
import ico2 from '../assets/main/Images/883407-b6c8c358.png';
import ico3 from '../assets/main/Images/809957-aa201755.png';
import Menu from '../components/header/Menu';

function FaireDon(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <Fragment>
            <div>
                <section>
                    <Menu/>
                </section>
                <section  className="u-clearfix u-palette-2-base u-section-4 scroll-link" id="section4">
                    <div style={{marginLeft:'40px'}} className="u-clearfix u-sheet u-sheet-1">
                        <div className="u-clearfix u-expanded-width u-gutter-20 u-layout-wrap u-layout-wrap-1">
                        <div className="u-layout">
                            <div className="u-layout-row">
                            <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-20 u-layout-cell-1">
                                <div className="u-container-layout u-container-layout-1"><span className="u-file-icon u-icon u-text-white u-icon-1"><img src={ico1} alt="" /></span>
                                <h3 style={{color:'white'}} className="u-text u-text-1">DONNER AVEC VIREMENT</h3>
                                <Link style={{marginTop:'50px'}} to={'/virement'} className="u-border-2 u-border-palette-1-base u-btn u-button-style u-btn-1" >Donner</Link>
                                </div>
                            </div>
                            <div className="u-align-left u-container-style u-layout-cell u-size-20 u-layout-cell-2">
                                <div className="u-container-layout u-container-layout-2"><span className="u-file-icon u-icon u-text-white u-icon-2"><img src={ico2} alt="" /></span>
                                <h3 style={{color:'white'}} className="u-text u-text-2">Donner des MÉDICAMENTS</h3>
                                <Link style={{marginTop:'50px'}} to={'/medica'} className="u-border-2 u-border-palette-1-base u-btn u-button-style u-btn-1" >Donner</Link>
                                </div>
                            </div>
                            <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-20 u-layout-cell-3">
                                <div className="u-container-layout u-container-layout-3"><span className="u-file-icon u-icon u-text-white u-icon-3"><img src={ico3} alt="" /></span>
                                <h3 style={{color:'white'}} className="u-text u-text-3">Donner appareil MÉDICAL</h3>
                                <Link style={{marginTop:'50px'}} to={'/appareil'} className="u-border-2 u-border-palette-1-base u-btn u-button-style u-btn-1" >Donner</Link>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="u-container-style u-group u-group-1">
                        <div className="u-container-layout u-valign-middle u-container-layout-4">
                            <h2 style={{color:'white'}} className="u-text u-text-4">Nos catégories de dons</h2>
                            <p className="u-text u-text-5">
                            <span style={{color:'white',fontWeight: 400}}>Notre organisation contribue à&nbsp; fournir le matériel&nbsp;médical&nbsp;et l'aide nécessaire&nbsp;aux nécessieux à travers les dons fournis par les donateurs que se soit en virement&nbsp;, médicaments&nbsp;ou dispositif&nbsp;médical</span>
                            <span style={{fontWeight: 700}} />
                            </p>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
        </Fragment>

    )
}
export default FaireDon;