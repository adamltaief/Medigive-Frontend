import React from 'react';
import DonbesoinItem from './DonbesoinItem';
import data from './data';

const Donbesoin = () => {
  return (
    <section style={{ backgroundColor: 'white' }} className="mt-5 pt-4">
      <div style={{ marginLeft: '50px' }} className="row align-items-end mb-4 pb-2">
        <div style={{ textAlign: 'left' }} className="col-md-8">
          <div className="section-title text-center text-md-start">
            <h1 style={{ fontFamily: 'open sans', fontWeight: 'bold', textAlign: 'left' }} className="title mb-4">
              Liste des besoins
            </h1>
            <p style={{ textAlign: 'left', fontSize: '16px' }} className="text-muted mb-0 para-desc">
              Bienvenue sur la page de liste des besoins de notre site MediGive. Cette page contient une liste des
              demandes d'aide publiées par les personnes dans le besoin. Nous espérons que cela vous donnera un aperçu
              des besoins actuels et vous permettra de trouver une opportunité d'aider ceux qui en ont besoin. N'hésitez
              pas à parcourir la liste et à proposer un don si vous l'avez à disposition.
            </p>
          </div>
        </div>
        <div className="">
          {data.map((item) => (
            <DonbesoinItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Donbesoin;
