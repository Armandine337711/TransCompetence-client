import React, { Component, useState } from 'react'
import InputDataNumber from './InputDataNumber';
import InputDataText from './InputDataText';
import ValidateFinancialData from '../ValidateFinancialData';
import '../../style/style.css'

const DataPackage4 = () => {
  const [dp, setDp] =useState({
    id:1,
    dpNb:4,
    duration_motor_vehicle_use: '',
    mv_financing_method_id: '',
    value_motor_vehicle:'',
    mv_financing_method_id:'',
    motor_vehicle_loan_amount: '',
    motor_vehicle_borrowing_rate:'',
    motor_vehicle_loan_duration:'',
    mv_resale_value:'',
    mv_contract_length:'',
    mv_monthly_rental_amount:'',
    mv_optional_purchase_value:'',
});

const handleChange = (name, data) => {
  setDp(truc => ({ ...truc, [name]: data }))
}; 
  return (
    <form>
      <InputDataNumber
        label="E21: Durée d'utilisation du véhicule moteur (ans)"
        id='E21'
        name='duration_motor_vehicle_use'
        value={dp.name}
        onChange={handleChange}
      />
      <InputDataNumber
        label="E22: Mode de financement du véhicule moteur (1 pour Emprunt, 2 pour Crédit Bail, 3 pour Location Financière)"
        id='E22'
        name='mv_financing_method_id'
        value={dp.name}
        onChange={handleChange}
      />
      <InputDataNumber
          label="E23: Valeur du véhicule moteur (€) "
          id='E23'
          name='value_motor_vehicle'
          value={dp.name}
          onChange={handleChange}
      />
      <InputDataNumber
          label="E24: Montant de l'emprunt (€)"
          id='E24'
          name='motor_vehicle_loan_amount'
          value={dp.name}
          onChange={handleChange}
      />
      <InputDataNumber
          label="E25: Taux d'intérêt de l'emprunt (%) "
          id='E25'
          name='motor_vehicle_borrowing_rate'
          value={dp.name}
          onChange={handleChange}
      />
      <InputDataNumber
          label="E26: Durée de l'emprunt (mois) "
          id='E26'
          name='motor_vehicle_loan_duration'
          value={dp.name}
          onChange={handleChange}
      />
      <InputDataNumber
          label="E27: Valeur de revente (€)"
          id='E27'
          name='mv_resale_value'
          value={dp.name}
          onChange={handleChange}
      />
      <InputDataNumber
        label="E29: Durée du contrat (mois) (1) ou (2) "
        id='E29'
        name='mv_contract_length'
        value={dp.name}
        onChange={handleChange}
      />
      <InputDataNumber
        label="E30: Montant mensuel du loyer (€) (1) ou (2) "
        id='E30'
        name='mv_monthly_rental_amount'
        value={dp.name}
        onChange={handleChange}
      />
      <InputDataNumber
        label="E31: Valeur optionnelle d'achat (€) (1)"
        id='E31'
        name='mv_optional_purchase_value'
        value={dp.name}
        onChange={handleChange}
      />
      <ValidateFinancialData datas= {dp}/>
    </form>
  )
}


export default DataPackage4