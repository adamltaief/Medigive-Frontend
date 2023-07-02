import React from 'react';
import Index from './Pages/Index';
import Identifier from './Pages/Identifier';
import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import InscriDonateur from './Pages/inscriDonateur';
import InscriBenevole from './Pages/InscriBenevole';
import InscriNecessiteux from './Pages/inscriNecessiteux';
import DonVirement from './Pages/DonVirement';
import './assets/main/Css/Styles.css';
import './assets/main/Css/Styles2.css';
import DonAppareil from './Pages/DonAppareil';
import DonMedica from './Pages/DonMedica';
import InscriType from './Pages/InscriType';
import FaireDon from './Pages/FaireDon';
import DemandeAide from './Pages/DemandeAide';
import DemandeDon from './Pages/DemandeDon';
import PropAide from './Pages/PropAide';
import ListeDisponibles from './Pages/ListeDisponibles';
import ListeBesoins from './Pages/ListeBesoins';
import PropDon from './Pages/PropDon';
import Menu from './components/header/Menu';
function App() {
  return (
    <div >
      
      <Router>
      <Menu/>

        <Routes>
              <Route path='/' element={<Index/>} />
              <Route path='/se-connecter' element={<Identifier/>} /> 
              <Route path='/faire-don' element={<FaireDon/>} />     
              <Route path='/benevole' element={<InscriBenevole/>} />
              <Route path='/donateur' element={<InscriDonateur/>} />
              <Route path='/necessiteux' element={<InscriNecessiteux/>} /> 
              <Route path='/virement' element={<DonVirement/>} />  
              <Route path='/appareil' element={<DonAppareil/>} /> 
              <Route path='/medica' element={<DonMedica/>} />   
              <Route path='/inscritype' element={<InscriType/>} />
              <Route path='/liste-besoins' element={<ListeBesoins/>} />
              <Route path='/demande-aide' element={<DemandeAide/>} />
              <Route path='/demande-don' element={<DemandeDon/>} />
              <Route path='/prop-aide' element={<PropAide/>} />
              <Route path='/prop-don' element={<PropDon/>} />
              <Route path='/listedisponibles' element={<ListeDisponibles/>} />




        </Routes>       
      </Router>   
     

    </div>
  );
}

export default App;
