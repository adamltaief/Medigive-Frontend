import React, {Fragment, useEffect} from "react";
import '../assets/listedispo/style.css'
import Donsdisponibles from "../components/DonsDisponibles/DonDisponiblesList";

function ListeDisponibles(){
        
        useEffect(()=>{
            window.scrollTo(0,0)
        },[])
        
    return(

     <Fragment>
            <Donsdisponibles/>
    </Fragment> 
    )
    
}
export default ListeDisponibles;