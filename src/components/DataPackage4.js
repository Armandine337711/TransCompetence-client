import React, { Component } from 'react'
import InputDataNumber from '../components/InputDataNumber';
import '../style/style.css'

export class DataPackage4 extends Component {
  render() {
    return (
      <>
      <InputDataNumber
        label="E21: Durée d'utilisation du véhicule moteur (ans)"
        id='E21'
      />
      <InputDataNumber
        label="E22: Mode de financement du véhicule moteur (1 pour Emprunt, 2 pour Crédit Bail, 3 pour Location Financière)"
        id='E22'
      />
      <InputDataNumber
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
      />
      <InputDataNumber
          label="E28: Valeur du véhicule moteur (€)   "
          id='E28'
        />
        <InputDataNumber
          label="E29: Durée du contrat (mois) (1) ou (2) "
          id='E29'
        />
      <InputDataNumber
        label="E30: Montant mensuel du loyer (€) (1) ou (2) "
        id='E30'
      />
      <InputDataNumber
        label="E31: Valeur optionnelle d'achat (€) (1)"
        id='E31'
      />
      <InputDataNumber
        label="E32: Valeur de revente (€) (1)"
        id='E32'
      />
      </>
    )
  }
}

export default DataPackage4