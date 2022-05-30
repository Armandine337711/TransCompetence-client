import React from 'react';
import '../style/style.css'
import {NavLink} from 'react-router-dom'

const DeconnectionButton = () => {
  return (
    <div >
      <button className="ButtonDeconnection">
        <NavLink to="/"
        className="LinkMenu">
          Déconnexion
        </NavLink>
      </button>
      <button 
      className="ButtonDeconnection">
        <NavLink to="/account"
        className="LinkMenu">
          Mon compte
        </NavLink>
      </button>
    </div>
  );
};

export default DeconnectionButton;