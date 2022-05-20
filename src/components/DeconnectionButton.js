import React from 'react';
import '../style/style.css'
import {Link} from 'react-router-dom'

const DeconnectionButton = () => {
  return (
    <div >
      <button className="ButtonDeconnection">
        <Link to="/">
          Deconnexion
        </Link>
      </button>
      <button className="ButtonDeconnection">
        Mon compte
      </button>
    </div>
  );
};

export default DeconnectionButton;