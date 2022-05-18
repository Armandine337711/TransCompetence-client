import React, { Component } from 'react'
import InputDataNumber from '../components/InputDataNumber';
import '../style/style.css'

export class DataPackage10 extends Component {
  render() {
    return (
      <div>
        <InputDataNumber
          label="E33: Durée d'utilisation du véhicule tracté (ans)"
          id='E33'
        />
      </div>
    )
  }
}

export default DataPackage10