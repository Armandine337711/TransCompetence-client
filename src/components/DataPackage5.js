import React, { Component } from 'react'
import InputDataNumber from '../components/InputDataNumber';
import '../style/style.css'

export class DataPackage5 extends Component {
  render() {
    return (
      <>
        <InputDataNumber
          label="E20: Dépenses annuelles de péages (€)"
          id='E20'
        />
      </>
    )
  }
}

export default DataPackage5