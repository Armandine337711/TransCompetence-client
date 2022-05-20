import React, { Component } from 'react'
import InputDataNumber from '../components/InputDataNumber';
import '../style/style.css'

export class DataPackage3 extends Component {
  render() {
    return (
      <>
        <InputDataNumber
          label="E12: Coûts kilométriques pneumatiques globaux (€/km)"
          id='E12'
        />
        <InputDataNumber
          label="E13: Nombre de pneus Véhicule moteur"
          id='E13'
        />
        <InputDataNumber
          label="E14: Nombre de pneus Véhicule tracté"
          id='E15'
        />
        <InputDataNumber
          label="E15: Prix d'un pneu (€) Véhicule moteur"
          id='E15'
        />
        <InputDataNumber
          label="E16: Prix d'un pneu (€) Véhicule tracté"
          id='E16'
        />
        <InputDataNumber
          label="E17: Durée de vie (km) Véhicule moteur"
          id='E17'
        />
        <InputDataNumber
          label="E18: Durée de vie (km) Véhicule tracté"
          id='E18'
        />
        <InputDataNumber
          label="E19: Dépenses annuelles d'entretien-réparations par véhicule (€)"
          id='E19'
        />
        <InputDataNumber
          label="E20: Dépenses annuelles de péages (€)"
          id='E20'
        />
    </>
    )
  }
}

export default DataPackage3