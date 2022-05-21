import React from 'react';
import '../style/style.css'
import {NavLink} from 'react-router-dom'



const AdminComp = () => {
  return (
    <div className="HomeStyle">
      <div className="HomeMessage">
        Bonjour Steeve,<br/> Bienvenue sur votre espace utilisateur. Cliquez sur un menu pour commencer.
      </div>
      <div className="HomeBlocsStyle">
       
        <div
          className="HomeBloc">
            <h2 className="TitleHome">
              Liste Utilisateurs
            </h2>
            <span>
              Retrouvez la liste de tous les utilisateurs enregistrés sur l'application, ainsi que les informations les concernant. Vous pourrez les consulter, les modifier et les supprimer.
            </span>
        </div>

        <div 
          className="HomeBloc">
            <h2 className="TitleHome">
              Ajouter un nouvel utilisateur
            </h2>
            <span>
              Cliquez ici si vous souhaitez créer un nouvel utilisateur, afin de l'enregistrer et lui attribuer un rôle et des droits.
            </span>

        </div>
      </div>
    </div>
  );
};

export default AdminComp;