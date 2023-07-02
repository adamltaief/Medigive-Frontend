import React ,{Fragment, useEffect} from "react";
import { Link } from 'react-router-dom';
import '../assets/main/Css/Styles.css';
import '../assets/main/Css/Styles2.css';
import donateur from '../assets/main/Images/donateur.png';
import Ness from '../assets/main/Images/Ness.png';
import benevole from '../assets/main/Images/benevole.png';

function InscriType(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
    <Fragment>
        <div>
            <section className="u-clearfix current-section u-block-a5c4-1 u-section-5" custom-posts-hash="[]" data-style="blank" data-section-properties="{&quot;margin&quot;:&quot;none&quot;,&quot;stretch&quot;:true}" id="Sectionup" data-id="a5c4" style={{height: '700px'}}>
            <div className="u-clearfix u-layout-wrap u-block-control u-expanded-width u-block-a5c4-2" style={{marginTop: '0px', marginBottom: '0px'}} data-layout-wrap-id={3} data-block={43} data-block-type="Layout">
            <div className="u-layout">
                <div className="u-layout-row">
                <div className="u-container-style u-layout-cell u-block-control u-size-20 ui-draggable ui-droppable u-block-a5c4-5" style={{minHeight: '489px', marginTop:'100px'}} data-cell-id={7} data-column-id={8} data-block={45} data-block-type="Cell">
                    <div className="u-container-layout u-block-a5c4-6" style={{}} data-container-layout-dom={9} data-block-type>
                    <Link to={'/donateur'}><img className="u-image u-image-default u-image-contain u-block-control u-block-a5c4-14" src={donateur} alt="" data-image-width={328} data-image-height={400} data-block={91} style={{width: '257.344px', height: '320px', margin: '48.2657px auto 0px 120.25px'}} data-block-type="Image" />
                    <h1 style={{color: '#1181b2' , backgroundImage: 'none', fontSize: '1.875rem', fontWeight: 700, margin: '14.0937px auto 0px', marginLeft: '60px', padding: '0px'}} data-block={86} data-block-type="Button">JE SUIS UN DONATEUR &nbsp;</h1>
                    </Link>
                    
                    </div>
                </div> 
                <div className="u-container-style u-layout-cell u-block-control u-size-20 ui-draggable ui-droppable u-block-a5c4-5" style={{minHeight: '489px', marginTop:'100px'}} data-cell-id={7} data-column-id={8} data-block={45} data-block-type="Cell">
                    <div className="u-container-layout u-block-a5c4-6" style={{}} data-container-layout-dom={9} data-block-type>
                    <Link to={'/benevole'}> <img className="u-image u-image-default u-image-contain u-block-control u-block-a5c4-14" src={benevole} alt="" data-image-width={328} data-image-height={400} data-block={91} style={{width: '257.344px', height: '320px', margin: '48.2657px auto 0px 59.25px'}} data-block-type="Image" />
                    <h1 className="" style={{color: '#1181b2' , backgroundImage: 'none', fontSize: '1.875rem', fontWeight: 700, margin: '14.0937px auto 0px', marginLeft: '40px', padding: '0px'}} data-block={86} data-block-type="Button">JE SUIS UN BENEVOLE&nbsp;</h1>
                    </Link>
                    </div>
                </div>
                <div className="u-container-style u-layout-cell u-block-control u-size-20 ui-draggable ui-droppable u-block-a5c4-5" style={{minHeight: '489px', marginTop:'100px'}} data-cell-id={7} data-column-id={8} data-block={45} data-block-type="Cell">
                    <div className="u-container-layout u-block-a5c4-6" style={{}} data-container-layout-dom={9} data-block-type>
                    <Link to={'/necessiteux'}><img className="u-image u-image-default u-image-contain u-block-control u-block-a5c4-14" src={Ness} alt="" data-image-width={328} data-image-height={400} data-block={91} style={{width: '257.344px', height: '320px', margin: '48.2657px auto 0px 100.25px'}} data-block-type="Image" />
                    <h1 className="" style={{color: '#1181b2' , backgroundImage: 'none', fontSize: '1.875rem', fontWeight: 700, margin: '14.0937px auto 0px', marginLeft: '50px', padding: '0px'}} data-block={86} data-block-type="Button">JE SUIS UN NECESSITEUX&nbsp;</h1>     
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </section>
        </div>
    </Fragment>
)}
export default InscriType;

