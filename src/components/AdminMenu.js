import React from 'react';
import '../style/style.css'
import Header from './Header'
import DeconnectionButton from './DeconnectionButton';


const AdminMenu = () => {
  return (
    <div className="GlobalHeaderAdmin">
      <Header />
      <div className="HeaderAdminRight">
        <div className="HeaderButtonDeco">
          <DeconnectionButton />
        </div>
        <div className="AdminMenu">
          <ul className="AdminMenuList">
            <li className=" AdminMenuItem" >
              Liste utilisateurs
            </li>
            <li className="AdminMenuItem" >
              Ajouter
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminMenu;