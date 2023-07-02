import React, {Fragment, useEffect} from "react";
import '../assets/listebesoins/style.css'
import Donbesoin from "../components/DonsBesoin/Donbesoin";

function ListeBesoins(){
    
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return(
     <Fragment>
            <Donbesoin/>
    </Fragment>   
    )
}
export default ListeBesoins;