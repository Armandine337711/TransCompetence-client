import React from 'react';
import logo3 from '../images/logo3.svg'
import '../style/style.css'

const Header = () => {
  return (
    <div className="HeaderLogo">
      <img src={logo3}
      alt="Logo de l'entreprise"
      height="166px"
      width="386px"
      ></img>
    </div>
  );
};

export default Header;