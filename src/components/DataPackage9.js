import React, { Component } from 'react'
import InputDataNumber from '../components/InputDataNumber';

export class DataPackage9 extends Component {
  render() {
    return (
      <div>
        <InputDataNumber
          label="E28: Valeur du véhicule moteur (€)   "
          id='E28'
        />
        <InputDataNumber
          label="E29: Durée du contrat (mois) (1) ou (2) "
          id='E29'
        />
        <InputDataNumber
          label="E30: Montant mensuel du loyer (€) (1) ou (2) "
          id='E30'
        />
        <InputDataNumber
          label="E31: Valeur optionnelle d'achat (€) (1)"
          id='E31'
        />
        <InputDataNumber
          label="E32: Valeur de revente (€) (1)"
          id='E32'
        />
      </div>
    )
  }
}

export default DataPackage9