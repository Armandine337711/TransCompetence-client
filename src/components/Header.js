import React from 'react';
import logo3 from '../images/logo3.svg'
import '../style/style.css'

const Header = () => {
  return (
    <div className="HeaderLogoGeneral">
      <img src={logo3}
      alt="Logo de l'entreprise"
      className="HeaderLogo"
      ></img>
    </div>
  );
};

export default Header;