import React, { Component } from 'react'
<<<<<<< HEAD:src/components/DataPackage3.js
import InputDataNumber from '../components/InputDataNumber';
import InputDataText from '../components/InputDataText';
import '../style/style.css'
=======
import InputDataNumber from './InputDataNumber';
import '../../style/style.css'
>>>>>>> 8f859615262750a63ee68ebc7c34c093adcaa278:src/components/Financial/DataPackage3.js

export class DataPackage3 extends Component {
  render() {
    return (
      <div>
        <InputDataText
          label="E12: Coûts kilométriques pneumatiques globaux (€/km)"
          id='E12'
        />
        <InputDataText
          label="E13: Nombre de pneus Véhicule moteur"
          id='E13'
        />
        <InputDataText
          label="E14: Nombre de pneus Véhicule tracté"
          id='E15'
        />
        <InputDataText
          label="E15: Prix d'un pneu (€) Véhicule moteur"
          id='E15'
        />
        <InputDataText
          label="E16: Prix d'un pneu (€) Véhicule tracté"
          id='E16'
        />
        <InputDataText
          label="E17: Durée de vie (km) Véhicule moteur"
          id='E17'
        />
        <InputDataText
          label="E18: Durée de vie (km) Véhicule tracté"
          id='E18'
        />
        <InputDataText
          label="E19: Dépenses annuelles d'entretien-réparations par véhicule (€)"
          id='E19'
        />
        <InputDataText
          label="E20: Dépenses annuelles de péages (€)"
          id='E20'
        />
    </div>
    )
  }
}

export default DataPackage3