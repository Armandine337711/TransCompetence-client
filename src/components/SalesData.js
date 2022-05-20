import React from 'react';
import '../style/style.css'

const SalesData = () => {
  return (
    <>
      <table className="salesTable">

        <tr>
          <th>Intitulé</th>
          <th>Distance</th>
          <th>Péages</th>
          <th>Temps</th>
        </tr>

        <tr>
          <td>
            <label for="relationAB">Parcours d'approche jusqu'au point de chargement : relation AB
            </label>
        </td>
          <td>
            <input 
              name="relationAB" 
              id="relationAB">
            </input>
          </td>
          <td>
            <input 
              name="relationAB" 
              id="relationABpeages">
            </input>
          </td>
          <td>
          <input 
            name="relationAB" 
            id="relationABTemps">
          </input>
          </td>
        </tr>


        <tr>
          <td><label for="TimeCharge">Temps de chargement en B	
            </label>
            </td>
          <td></td>
          <td></td>
          <td><input 
            name="relationAB" 
            id="relationABTemps">
          </input>
          </td>
        </tr>


        <tr>
          <td><label for="relationBC">Transport en charge : relation BC
            </label>
          </td>
          <td>
            <input
              name="relationBC"
              id="relationBCdistance">
            </input>
          </td>
          <td>
            <input
              name="relationBC"
              id="relationBCpeage">
            </input>
          </td>
          <td>
            <input
              name="relationBC"
              id="relationBCtime">
            </input>
          </td>
        </tr>



        <tr>
          <td><label for="TimeChargeC">Temps de déchargement en C	
            </label>
          </td>
          <td></td>
          <td></td>
          <td>
            <input
              name="TimeChargeC"
              id="TimeChargeC">
            </input>
          </td>
        </tr>



        <tr>
          <td><label>Retour au point de chargement : relation CB
            </label>
          </td>
          <td>
            <input
              name="relationCB"
              id="relationCBdistance">
            </input>
          </td>
          <td>
            <input
              name="relationCB"
              id="relationCBpeage">
            </input>
          </td>
          <td>
            <input
              name="relationCB"
              id="relationCBtime">
            </input>
          </td>
        </tr>



        <tr>
          <td><label>Retour après le dernier déchargement à la base de départ : relation CA
            </label>
          </td>
          <td>
            <input
              name="relationCA"
              id="relationCAdistance">
            </input>
          </td>
          <td>
            <input
              name="relationCA"
              id="relationCApeage">
            </input>
            </td>
          <td>
            <input
              name="relationCA"
              id="relationCAtime">
            </input>
          </td>
        </tr>

          <tr>
            <th>
              <span>-----------------------------------------------------------------</span>
            </th>
          </tr>

        <tr>
          <td>
            <label>
              unité de chargement
            </label>
          </td>
          <td>
            <input>
            </input>
          </td>
        </tr>


        <tr>
          <td>
            <label>
              Chargement d'un tour (correspondant à l'unité ci-dessus)
            </label>
          </td>
          <td>
            <input
              name=""
              id="">
            </input>
          </td>
        </tr>

        <tr>
          <td>
            <label>
              Temps de travail journalier pouvant être effectué
            </label>
          </td>
          <td>
            <input
              name=""
              id="">
            </input>
          </td>
        </tr>


        <th>
          <span>-----------------------------------------------------------------</span>
        </th>


        <tr>
          <td>
            Autre coût, lié au transport ou non, à inclure dans le calcul de coût d'un tour
          </td>
        </tr>

        <tr>
          <td>
            <label>
              autre coût n'est spécifié dans l'onglet V
            </label>
          </td>
          <td>
            <input
              name=""
              id="">
            </input>
          </td>
        </tr>

      </table>
    </>
  );
};

export default SalesData;