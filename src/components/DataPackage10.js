import React, { Component } from 'react'
import InputDataNumber from '../components/InputDataNumber';
import '../style/style.css'

export class DataPackage10 extends Component {
  render() {
    return (
      <>
        <InputDataNumber
          label="E33: Durée d'utilisation du véhicule tracté (ans)"
          id='E33'
        />
      </>
    )
  }
}

export default DataPackage10