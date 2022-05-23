import React, { Component } from 'react'
import InputDataNumber from '../components/InputDataNumber';
import '../style/style.css'

export class DataPackage7 extends Component {
  render() {
    return (
      <div>
        <InputDataNumber
          label="E49: Nombre de conducteur(s) affecté(s) à l'exploitation du véhicule"
          id='E49'
        />
        <InputDataNumber
          label="E50: Nombre de jours d'activité par an d'un conducteur"
          id='E50'
        />
        <InputDataNumber
          label="E51: Temps de service mensuel (heures)"
          id='E51'
        />
        <InputDataNumber
          label="E52: Temps de conduite mensuel (heures)"
          id='E52'
        />
        <InputDataNumber
          label="E53: Nombre de jours travaillés par mois"
          id='E53'
        />
        <InputDataNumber
          label="E54: Salaire mensuel brut (€/mois)"
          id='E54'
        />
        <InputDataNumber
          label="E55: Primes annuelles (€/an)"
          id='E55'
        />
        <InputDataNumber
          label="E56: Taux de cotisations employeurs (%)"
          id='E56'
        />
        <InputDataNumber
          label="E57: Indemnités de déplacement par an (€/an)"
          id='E57'
        />
        <InputDataNumber
          label="E58: Nombre de mois payés"
          id='E58'
        />
      </div>
    )
  }
}

export default DataPackage7