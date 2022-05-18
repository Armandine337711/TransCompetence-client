import React, { Component } from 'react'
import InputDataNumber from '../components/InputDataNumber';
import '../style/style.css'

export class DataPackage13 extends Component {
  render() {
    return (
      <div>
        <InputDataNumber
          label="E40: Valeur du véhicule tracté (€)"
          id='E40'
        />
        <InputDataNumber
          label="E41: Durée du contrat (mois) (1) ou (2) "
          id='E41'
        />
        <InputDataNumber
          label="E42: Montant mensuel du loyer (€) (1) ou (2)"
          id='E42'
        />
        <InputDataNumber
          label="E43: Valeur optionnelle d'achat (€) (1)"
          id='E0'
        />
        <InputDataNumber
          label="E44: Valeur de revente (€) (1)"
          id='E44'
        />
      </div>
    )
  }
}

export default DataPackage13