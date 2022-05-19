import React, { Component } from 'react'
import InputDataNumber from '../components/InputDataNumber';
import '../style/style.css'

export class DataPackage15 extends Component {
  render() {
    return (
      <>
        <InputDataNumber
          label="E47: Montant annuel de taxe à l'essieu (€/an)"
          id='E47'
        />
      </>
    )
  }
}

export default DataPackage15