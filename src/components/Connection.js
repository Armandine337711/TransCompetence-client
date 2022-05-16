import React from 'react';
import '../style/style.css'

const connection = () => {
  return (
    <div className="ConnectionPage">
      <h1 className="ConnectionTitle">CONNEXION</h1>
      <form 
      action=""
      method="post"
      className="FormConnection">
        <div 
        className='ConnectionUser'>
          <label 
          for="user"
          className="LabelUser">Identifiant : 
          </label>
          <input 
            type="text" 
            id="user"
          ></input>
        </div>
         <br/>
         <div 
         className='ConnectionPassword'>
          <label 
          for="password"
          className="PasswordUser">Mot de passe : 
          </label>
          <input 
            type="password" 
            id="password"
          ></input>
          <br/>
         </div>
         <div
         className="ConnectionValidate">
          <button 
            type="submit"
            className="ConnectionButton"
          >Valider
          </button>
        </div>
      </form>
    </div>
  );
};

export default connection;