import React from 'react';
import DondisponibleItem from './DonDisponibleitem';
import { donations } from './Data';
const Donsdisponibles = () => {
  return (
    <section className="mt-5 pt-4">
      <div style={{ marginLeft: '50px', marginTop: '30px' }} className="wrapper wrapper-content animated">
        <div className="col-md-8">
          <div style={{ textAlign: "left", marginBottom: '30px' }} className="section-title text-md-start">
            <h1 style={{ fontFamily: "open sans", fontWeight: "bold", fontSize: '45px', marginBottom: '30px' }} className="title mb-4">
              Liste des disponibles
            </h1>
            <p style={{ marginBottom: 30, fontSize: 15 }} className="text-muted mb-0 para-desc">
              Bienvenue sur la page de la liste des disponibles de notre site MediGive. Ici, vous trouverez une sélection variée d'appareils médicaux et de médicaments disponibles pour répondre à vos besoins de santé. Notre organisation caritative s'efforce de fournir un accès facile et gratuit à ces ressources vitales pour ceux qui en ont le plus besoin. Parcourez notre liste et trouvez les articles qui pourraient vous être utiles. N'hésitez pas à contacter notre équipe si vous avez des questions ou si vous avez besoin d'une assistance supplémentaire. Nous sommes là pour vous aider à prendre soin de votre santé.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9">
            <div className="ibox">
              {donations.map((donation, index) => (
                <DondisponibleItem key={index} donation={donation} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Donsdisponibles;
