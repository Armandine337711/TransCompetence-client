import React from 'react';
import '../style/style.css'
import Header from './Header'
import DeconnectionButton from './DeconnectionButton';



const FinancialMenu = () => {
  return (
    <div className="GlobalHeaderFinancial">
      <Header />
      <div className="HeaderFinancialRight">
        <div className="HeaderButtonDeco">
          <DeconnectionButton />
        </div>
        <div className="FinancialMenu">
          <ul className="FinancialMenuList">
            <li className="FinancialMenuItem" >
              Tableau de bord
            </li>
            <li className="FinancialMenuItem" >
              Saisies données
            </li>
            <li className="FinancialMenuItem">
              Récapitulatif
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FinancialMenu;