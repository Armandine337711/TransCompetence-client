import React from 'react';
import '../../style/style.css'
import Header from '../Header'
import DeconnectionButton from '../DeconnectionButton';
import {NavLink} from 'react-router-dom'


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
              <NavLink to="/adminhome"
              className="LinkMenu">
                Liste utilisateurs
              </NavLink>
            </li>
            <li className="AdminMenuItem" >
              <NavLink to="/adminnewuser"
              className="LinkMenu">
                Ajouter
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminMenu;