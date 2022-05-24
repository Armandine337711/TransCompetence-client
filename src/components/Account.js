import React from 'react';
import '../style/style.css'

const Account = () => {
  return (
    <div
    className="AccountStyle">
      <h2>Mon compte</h2>
      <div
      className="Acc">
        <div> Nom :</div>
        <div> Prénom :</div>
        <div> Identifiant :</div>
        <div> Adresse email :</div>
        <div> Mot de passe :</div>
        <div> Rôle :</div>
      </div>
    </div>
  );
};

export default Account;