import React from 'react';
import '../../style/style.css'
import Header from '../Header'
import DeconnectionButton from '../DeconnectionButton';
import {NavLink} from 'react-router-dom'



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
              <NavLink to="#"
              className="LinkMenu">
               Tableau de bord
              </NavLink>
            </li>
            <li className="FinancialMenuItem" >
              <NavLink to="/financialhome"
              className="LinkMenu">
                Saisies données
              </NavLink>
            </li>
            <li className="FinancialMenuItem">
              <NavLink to="#"
              className="LinkMenu">
                Récapitulatif
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FinancialMenu;