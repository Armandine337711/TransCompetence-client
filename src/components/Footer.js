import React from 'react';
import logodb2 from '../images/logodb2.png'
import '../style/style.css'

const Footer = () => {
  return (
    <div className="Footer">
      <footer>
        <img
          src={logodb2}
          alt="Logo db concept"
          className="DBLogo"
        ></img>
      </footer>
    </div>
  );
};

export default Footer;