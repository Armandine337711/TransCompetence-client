import React, { Component } from 'react'
import InputDataNumber from '../components/InputDataNumber';
import '../style/style.css'

export class DataPackage8 extends Component {
  render() {
    return (
      <>
        <InputDataNumber
<<<<<<< HEAD
            label="E23: Valeur du véhicule moteur (€) "
            id='E23'
        />
        <InputDataNumber
            label="E24: Montant de l'emprunt (€)"
            id='E24'
        />
        <InputDataNumber
            label="E25: Taux d'intérêt de l'emprunt (%) "
            id='E25'
        />
        <InputDataNumber
            label="E26: Durée de l'emprunt (mois) "
            id='E26'
        />
        <InputDataNumber
            label="E27: Valeur de revente (€)"
            id='E27'
=======
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
>>>>>>> ff855b16a3b93b74d73340c79ebe05dcfa29193e
        />
      </>
    )
  }
}

export default DataPackage8