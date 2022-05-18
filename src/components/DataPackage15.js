import React, { Component } from 'react'
import InputDataNumber from '../components/InputDataNumber';

export class DataPackage15 extends Component {
  render() {
    return (
      <div>
        <InputDataNumber
          label="E47: Montant annuel de taxe à l'essieu (€/an)"
          id='E47'
        />
      </div>
    )
  }
}

export default DataPackage15