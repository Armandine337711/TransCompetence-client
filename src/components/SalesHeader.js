import React from 'react';
import '../style/style.css'
import Header from './Header'
import DeconnectionButton from './DeconnectionButton';


const SalesHeader = () => {
  return (
    <div className="GlobalHeaderSales">
      <Header />
      <div className="HeaderSalesRight">
        <div className="HeaderButtonDeco">
          <DeconnectionButton />
        </div>
        <div className="SalesMenu">
          <ul className="SalesMenuList">
            <li className="SalesMenuItem" >
              Nouveaux Chiffrage
            </li>
            <li className="SalesMenuItem" >
              Historique
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SalesHeader;