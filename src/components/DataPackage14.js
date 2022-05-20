import React, { Component } from 'react'
import InputDataNumber from '../components/InputDataNumber';
import '../style/style.css'

export class DataPackage14 extends Component {
  render() {
    return (
      <>
        <InputDataNumber
          label="E45: Montant annuel de l'assurance d'un véhicule RC + VI (€/an)"
          id='E45'
        />
        <InputDataNumber
          label="E46: Montant annuel de l'assurance marchandises transportées par véhicule (€/an)"
          id='E46'
        />
      </>
    )
  }
}

export default DataPackage14