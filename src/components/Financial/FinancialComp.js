import React from 'react';
import '../../style/style.css'
import {NavLink} from 'react-router-dom'

const FinancialComp = () => {
  return (
    <div className="HomeStyle">
    <div className="HomeMessage">
      Bonjour Steeve,<br/> Bienvenue sur votre espace utilisateur. Cliquez sur un menu pour commencer.
    </div>
    <div className="HomeBlocsStyle">
     
      <NavLink to="#"
        className="HomeBlocFin">
          <h2 className="TitleHome">
            Tableau de bord
          </h2>
          <span>
            Cliquez ici pour visualiser le tableau de bord.
          </span>
      </NavLink>

      <NavLink to="/financialhome"
        className="HomeBlocFin">
          <h2 className="TitleHome">
            Saisies données
          </h2>
          <span>
            Saississez les données annuelles du controle de gestion.
          </span>
      </NavLink>

      <NavLink to="#" 
        className="HomeBlocFin">

          <h2 className="TitleHome">
            Récapitulatif
          </h2>
          <span>
            Visualisez l'ensemble des données saisies afin de les valider ou les corriger si necessaire.
          </span>

      </NavLink>
    </div>
  </div>
  );
};

export default FinancialComp;