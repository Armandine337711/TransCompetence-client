import React, { Component } from 'react'
import InputDataNumber from '../components/InputDataNumber';
import '../style/style.css'

export class DataPackage7 extends Component {
  render() {
    return (
      <>
        <InputDataNumber
        label="E22: Mode de financement du véhicule moteur (1 pour Emprunt, 2 pour Crédit Bail, 3 pour Location Financière)"
        id='E22'/>
    </>
    )
  }
}

export default DataPackage7