import React from 'react';
import '../style/style.css'
import {NavLink} from 'react-router-dom'

const SalesComp = () => {
  return (
    <div className="HomeStyle">
    <div className="HomeMessage">
      Bonjour Steeve,<br/> Bienvenue sur votre espace utilisateur. Cliquez sur un menu pour commencer.
    </div>
    <div className="HomeBlocsStyle">
     
      <NavLink to="/salesdata"
        className="HomeBloc">
          <h2 className="TitleHome">
            Nouveau chiffrage
          </h2>
          <span>
            Retrouvez ici le formulaire permettant de rentrer toutes les données necessaires à l'eteblissement d'un nouveau chiffrage.
          </span>
      </NavLink>

      <NavLink to="/saleshistory" 
        className="HomeBloc">
          <h2 className="TitleHome">
            Historique chiffrage
          </h2>
          <span>
            Consultez l'historique des anciens chiffrage. Vous pourrez accéder aux détails ainsi que les dupliquer.
          </span>

      </NavLink>
    </div>
  </div>
  );
};

export default SalesComp;