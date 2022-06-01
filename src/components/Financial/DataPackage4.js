import React, { Component, useState } from 'react'
import InputDataNumber from './InputDataNumber';
import InputDataText from './InputDataText';
import '../../style/style.css'

const DataPackage4 = () => {
  const [name,setName] = useState({name:'DataPackage4'});
  return (
    <div>
    <InputDataText
      label="E21: Durée d'utilisation du véhicule moteur (ans)"
      id='E21'
      name='duration_motor_vehicle_use'
    />
    <InputDataText
      label="E22: Mode de financement du véhicule moteur (1 pour Emprunt, 2 pour Crédit Bail, 3 pour Location Financière)"
      id='E22'
      name='motor_vehicle_loading_unit_id'
    />
    <InputDataText
        label="E23: Valeur du véhicule moteur (€) "
        id='E23'
        name='value_motor_vehicle'
    />
    <InputDataText
        label="E24: Montant de l'emprunt (€)"
        id='E24'
        name='motor_vehicle_loan_amount'
    />
    <InputDataText
        label="E25: Taux d'intérêt de l'emprunt (%) "
        id='E25'
        name='motor_vehicle_borrowing_rate'
    />
    <InputDataText
        label="E26: Durée de l'emprunt (mois) "
        id='E26'
        name='motor_vehicle_loan_duration'
    />
    <InputDataText
        label="E27: Valeur de revente (€)"
        id='E27'
        name='mv_resale_value'
    />
    <InputDataText
      label="E29: Durée du contrat (mois) (1) ou (2) "
      id='E29'
      name='mv_contract_length'
    />
    <InputDataText
      label="E30: Montant mensuel du loyer (€) (1) ou (2) "
      id='E30'
      name='mv_monthly_rental_amount'
    />
    <InputDataText
      label="E31: Valeur optionnelle d'achat (€) (1)"
      id='E31'
      name='mv_optional_purchase_value'
    />
    </div>
  )
}


export default DataPackage4