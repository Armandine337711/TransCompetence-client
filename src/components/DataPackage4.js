import React, { Component } from 'react'
import InputDataNumber from '../components/InputDataNumber';
import '../style/style.css'

export class DataPackage4 extends Component {
  render() {
    return (
      <>
        <InputDataNumber
        label="E19: Dépenses annuelles d'entretien-réparations par véhicule (€)"
        id='E19'
        />
      </>
    )
  }
}

export default DataPackage4