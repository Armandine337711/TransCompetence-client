import React, { Component } from 'react'
import InputDataNumber from '../components/InputDataNumber';
import '../style/style.css'

export class DataPackage16 extends Component {
  render() {
    return (
      <div>
        <InputDataNumber
          label="E48: Montant annuel des coûts de structure par véhicule (€/an)"
          id='E48'
        />
      </div>
    )
  }
}

export default DataPackage16