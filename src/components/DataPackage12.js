import React, { Component } from 'react'
import InputDataNumber from '../components/InputDataNumber';
import '../style/style.css'

export class DataPackage12 extends Component {
  render() {
    return (
      <>
        <InputDataNumber
          label="E35: Valeur du véhicule tracté (€) "
          id='E35'
        />
        <InputDataNumber
          label="E36: Montant de l'emprunt (€)"
          id='E36'
        />
        <InputDataNumber
          label="E37: Taux d'intérêt de l'emprunt (%) "
          id='E37'
        />
        <InputDataNumber
          label="E38: Durée de l'emprunt (mois)"
          id='E38'
        />
        <InputDataNumber
          label="E39: Valeur de revente (€)"
          id='E39'
        />
      </>
    )
  }
}

export default DataPackage12