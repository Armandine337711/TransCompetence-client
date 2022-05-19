import React, { Component } from 'react'
import InputDataNumber from '../components/InputDataNumber';
import '../style/style.css'

export class DataPackage11 extends Component {
  render() {
    return (
      <>
        <InputDataNumber
          label="E34: Mode de financement du véhicule tracté (1 pour Emprunt, 2 pour Crédit Bail, 3 pour Location Financière)"
          id='E34'
        />
      </>
    )
  }
}

export default DataPackage11