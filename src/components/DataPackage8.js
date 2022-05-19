import React, { Component } from 'react'
import InputDataNumber from '../components/InputDataNumber';
import '../style/style.css'

export class DataPackage8 extends Component {
  render() {
    return (
      <>
        <InputDataNumber
            label="E23: Valeur du véhicule moteur (€) "
            id='E23'
        />
        <InputDataNumber
            label="E24: Montant de l'emprunt (€)"
            id='E24'
        />
        <InputDataNumber
            label="E25: Taux d'intérêt de l'emprunt (%) "
            id='E25'
        />
        <InputDataNumber
            label="E26: Durée de l'emprunt (mois) "
            id='E26'
        />
        <InputDataNumber
            label="E27: Valeur de revente (€)"
            id='E27'
        />
      </>
    )
  }
}

export default DataPackage8