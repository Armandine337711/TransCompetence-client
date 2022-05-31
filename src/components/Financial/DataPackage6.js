import React, { Component } from 'react'
import InputDataNumber from './InputDataNumber';
import '../../style/style.css'

export class DataPackage6 extends Component {
  render() {
    return (
      <div>
        <InputDataNumber
          label="E45: Montant annuel de l'assurance d'un véhicule RC + VI (€/an)"
          id='E45'
        />
        <InputDataNumber
          label="E46: Montant annuel de l'assurance marchandises transportées par véhicule (€/an)"
          id='E46'
        />
        <InputDataNumber
          label="E47: Montant annuel de taxe à l'essieu (€/an)"
          id='E47'
        />
        <InputDataNumber
          label="E48: Montant annuel des coûts de structure par véhicule (€/an)"
          id='E48'
        />
      </div>
    )
  }
}

export default DataPackage6