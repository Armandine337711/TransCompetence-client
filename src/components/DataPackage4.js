import React, { Component } from 'react'
import InputDataNumber from '../components/InputDataNumber';

export class DataPackage4 extends Component {
  render() {
    return (
      <div>
        <InputDataNumber
        label="E19: Dépenses annuelles d'entretien-réparations par véhicule (€)"
        id='E19'
        />
      </div>
    )
  }
}

export default DataPackage4