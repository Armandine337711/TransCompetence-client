import React, { Component } from 'react'
import InputDataNumber from '../components/InputDataNumber';   

export class DataPackage7 extends Component {
  render() {
    return (
      <div>
        <InputDataNumber
        label="E22: Mode de financement du véhicule moteur (1 pour Emprunt, 2 pour Crédit Bail, 3 pour Location Financière)"
        id='E22'/>
    </div>
    )
  }
}

export default DataPackage7