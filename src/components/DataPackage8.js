import React, { Component } from 'react'
import InputDataNumber from '../components/InputDataNumber';
import '../style/style.css'

export class DataPackage8 extends Component {
  render() {
    return (
      <>
        <InputDataNumber
          label="E59: Libellé de la composante de coût (texte libre)"
          id='E59'
        />
        <InputDataNumber
          label="E60: Unité d'œuvre correspondant (texte libre)"
          id='E60'
        />
        <InputDataNumber
          label="E61: Nombre d'unité essai2 utilisé par an"
          id='E61'
        />
        <InputDataNumber
          label="E62: Montant annuel imputable à ce coût  (€/an)"
          id='E62'
        />
      </>
    )
  }
}

export default DataPackage8