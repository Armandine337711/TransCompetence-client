import React from 'react';
import '../../style/style.css'
import Header from '../Header'
import DeconnectionButton from '../DeconnectionButton';
import { NavLink} from 'react-router-dom'


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
              <NavLink to="/salesdata"
              className="LinkMenu">
                Nouveau Chiffrage
              </NavLink>
            </li>
            <li className="SalesMenuItem" >
              <NavLink to="/saleshistory"
              className="LinkMenu">
                Historique chiffrage
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SalesHeader;