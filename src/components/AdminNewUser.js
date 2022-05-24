import React from 'react';
import '../style/style.css'


const AdminNewUser = () => {
  return (
    <div 
    className="BlocNewUser">
      <h2 
      className="TitleAdminNewUser">Ajouter un nouvel utilisateur : </h2>
        <form
          action=""
          method="post"
          className="FormNewUserGeneral">
          <div>
            <label 
              for="Name"
              className="LabelNewUser"> Prénom : 

            </label>
            <input
              type="text"
              id="Name"
              placeholder="Prénom"
              className="FormNewUser">
            </input>
          </div>


          <div>
            <label 
              for="SurName"
              className="LabelNewUser"> Nom : 

            </label>
            <input
              type="text"
              id="SurName"
              placeholder="Nom"
              className="FormNewUser">
            </input>
          </div>


          <div>
            <label 
              for="NewUsername"
              className="LabelNewUser"> Identifiant : 

            </label>
            <input
              type="text"
              id="NewUsername"
              placeholder="Identifiant"
              className="FormNewUser">
            </input>
          </div>

          <div>
            <label 
              for="NewPassword"
              className="LabelNewUser"> Mot de passe : 

            </label>
            <input
              type="text"
              id="NewPassword"
              placeholder="Mot de passe"
              className="FormNewUser">
            </input>
          </div>


          <div>
            <label 
              for="NewMail"
              className="LabelNewUser"> Email : 

            </label>
            <input
              type="text"
              id="NewMail"
              placeholder="Email"
              className="FormNewUser">
            </input>
          </div>

          <div>
            <label
              for="UserType"
              className="LabelNewUser">Rôle :</label>
            <select
              name="UserType"
              id="UserType"
              className="FormNewUser">
                <option value="administrateur">Administrateur</option>
                <option value="Controleur de gestion">Controleur de gestion</option>
                <option value="Comercial">Commercial</option>




              </select>
          </div>


          <button
            type="submit"
            className="ValidateButton"
          >Valider

          </button>



        </form>
    </div>
  );
};

export default AdminNewUser;