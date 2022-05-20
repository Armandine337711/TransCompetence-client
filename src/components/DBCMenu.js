import React from 'react';
import '../style/style.css'
import Header from './Header'
import DeconnectionButton from './DeconnectionButton';


const DBCMenu = () => {
  return (
    <div className="GlobalHeaderDBC">
    <Header />
    <div className="HeaderDBCRight">
      <div className="HeaderButtonDeco">
        <DeconnectionButton />
      </div>
      <div className="DBCMenu">
        <ul className="DBCMenuList">
          <li className=" DBCMenuItem" >
            Saisie données
          </li>
          <li className="DBCMenuItem" >
            Récapitulatif
          </li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default DBCMenu;