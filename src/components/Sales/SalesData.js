import { useState } from 'react';
import React from 'react';
import '../../style/style.css'

const SalesData = () => {


  const [costing, setCosting] = useState({
    "quotation_date": "",
    "member_id": 1,
    "client_id": 1,
    "AB_distance": null,
    "AB_toll": null,
    "AB_duration": null,
    "B_loading_time": null,
    "BC_distance": null,
    "BC_toll": null,
    "BC_duration": null,
    "C_unloading_time": null,
    "CB_distance": null,
    "CB_toll": null,
    "CB_duration": null,
    "CA_distance": null,
    "CA_toll": null,
    "CA_duration": null,
    "loading_unit_id": "",
    "quantity_loading_unit": null,
    "dayly_working_time": null
  });


  const handleClick = (e) => {
    console.log(e);
    e.preventDefault()
    fetch("https://transcompetence.herokuapp.com/costing",
    {
      method: "POST",
      body: JSON.stringify(costing),
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((res) => res.json())
    .then((res) => {
      setCosting(res)
    });
  }

  const handleChange = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setCosting(values => ({ ...values, [name]: value }))
  }

  return (
    <form
    action=""
    method="post"
    onSubmit={handleClick}
    >
      <table className="salesTable">

        <tr>
          <th>Intitulé</th>
          <th>Distance</th>
          <th>Péages</th>
          <th>Temps</th>
        </tr>
          
        <tr>
          <td><label htmlFor="relationAB">Parcours d'approche jusqu'au point de chargement : relation AB 
        </label>
        </td>
          <td>
            <input 
              name="AB_distance" 
              id="relationAB"
              value={costing.AB_distance}
              onChange={handleChange}>
            </input>
          </td>
          <td>
            <input 
              name="AB_toll" 
              id="relationABpeages"
              value={costing.AB_toll}
              onChange={handleChange}>
            </input>
          </td>
          <td>
          <input 
            name="AB_duration" 
            id="relationABTemps"
            value={costing.AB_duration}
            onChange={handleChange}>
          </input>
          </td>
        </tr>


        <tr>
          <td><label htmlFor="TimeChargeB">Temps de chargement en B	
            </label>
            </td>
          <td></td>
          <td></td>
          <td><input 
            name="B_loaging_time" 
            id="TimeChargeB"
            value={costing.B_loading_time}
            onChange={handleChange}>
          </input>
          </td>
        </tr>


        <tr>
          <td><label htmlFor="relationBC">Transport en charge : relation BC
            </label>
          </td>
          <td>
            <input
              name="BC_distance"
              id="relationBC"
              value={costing.BC_distance}
              onChange={handleChange}>
            </input>
          </td>
          <td>
            <input
              name="BC_toll"
              id="relationBCpeage"
              value={costing.BC_toll}
              onChange={handleChange}>
            </input>
          </td>
          <td>
            <input
              name="BC_duration"
              id="relationBCtime"
              value={costing.BC_duration}
              onChange={handleChange}>
            </input>
          </td>
        </tr>



        <tr>
          <td><label htmlFor="TimeChargeC">Temps de déchargement en C	
            </label>
          </td>
          <td></td>
          <td></td>
          <td>
            <input
              name="C_unloading_time"
              id="C_unloading_tim"
              value={costing.C_unloading_time}
              onChange={handleChange}>
            </input>
          </td>
        </tr>



        <tr>
          <td><label htmlFor='relationCBdistance'>Retour au point de chargement : relation CB
            </label>
          </td>
          <td>
            <input
              name="CB_distance"
              id="relationCBdistance"
              value={costing.CB_distance}
              onChange={handleChange}>
            </input>
          </td>
          <td>
            <input
              name="CB_toll"
              id="relationCBpeage"
              value={costing.CB_toll}
              onChange={handleChange}>
            </input>
          </td>
          <td>
            <input
              name="CB_duration"
              id="relationCBtime"
              value={costing.CB_duration}
              onChange={handleChange}>
            </input>
          </td>
        </tr>



        <tr>
          <td><label htmlFor='reletionCAdiastance'>Retour après le dernier déchargement à la base de départ : relation CA
            </label>
          </td>
          <td>
            <input
              name="CA_distance"
              id="relationCAdistance"
              value={costing.CA_distance}
              onChange={handleChange}>
            </input>
          </td>
          <td>
            <input
              name="CA_toll"
              id="CA_toll"
              value={costing.CA_toll}
              onChange={handleChange}>
            </input>
            </td>
          <td>
            <input
              name="CA_duration"
              id="CA_duration"
              value={costing.CA_duration}
              onChange={handleChange}>
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
              name="loading_unit_id"
              id="loading_unit_id"
              value={costing.loading_unit_id}
              onChange={handleChange}>
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
              name="quantity_loading_unit"
              id="quantity_loading_unit"
              value={costing.quantity_loading_unit}
              onChange={handleChange}>
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
              name="dayly_working_time"
              id="dayly_working_time"
              value={costing.dayly_working_time}
              onChange={handleChange}>
            </input>
          </td>
        </tr>

      </table>

      <button 
        type="submit" 
        className="ValidateButton"
        >Valider
      </button>
    </form>
  );
};

export default SalesData;