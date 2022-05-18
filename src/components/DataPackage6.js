import React, { Component } from 'react'
import InputDataNumber from '../components/InputDataNumber';
import '../style/style.css'

export class DataPackage6 extends Component {
  render() {
    return (
      <div>
        <InputDataNumber
        label="E21: Durée d'utilisation du véhicule moteur (ans)"
        id='E21'
        />
    </div>
    )
  }
}

export default DataPackage6