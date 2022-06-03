import React, { Component, useState } from 'react'
import InputDataNumber from './InputDataNumber';
import InputDataText from './InputDataText';
import '../../style/style.css'


const DataPackage5 = () => {
  const [dp, setDp] =useState({
    duration_towed_vehicle: '',
    towed_vehicle_loading_unit: '',
    value_towed_vehicle:'',
    tv_financing_method_id:'',
    towed_vehicle_loan_amount: '',
    towed_vehicle_borrowing_rate:'',
    towed_vehicle_loan_duration:'',
    tv_resale_value:'',
    tv_contract_length:'',
    tv_monthly_rental_amount:'',
    tv_optional_purchase_value:'',
});

const handleChange = (name, data) => {
  setDp(truc => ({ ...truc, [name]: data }))
}; 
  return (
    <div>
    <InputDataNumber
      label="E33: Durée d'utilisation du véhicule tracté (ans)"
      id='E33'
      name='duration_towed_vehicle'
      value={dp.name}
      onChange={handleChange}
    />
    <InputDataNumber
      label="E34: Mode de financement du véhicule tracté (1 pour Emprunt, 2 pour Crédit Bail, 3 pour Location Financière)"
      id='E34'
      name='tv_financing_method_id'
      value={dp.name}
      onChange={handleChange}
    />
    <InputDataNumber
      label="E35: Valeur du véhicule tracté (€) "
      id='E35'
      name='value_towed_vehicle'
      value={dp.name}
      onChange={handleChange}
    />
    <InputDataNumber
      label="E36: Montant de l'emprunt (€)"
      id='E36'
      name='towed_vehicle_loan_amount'
      value={dp.name}
      onChange={handleChange}
    />
    <InputDataNumber
      label="E37: Taux d'intérêt de l'emprunt (%) "
      id='E37'
      name='towed_vehicle_borrowing_rate'
      value={dp.name}
      onChange={handleChange}
    />
    <InputDataNumber
      label="E38: Durée de l'emprunt (mois)"
      id='E38'
      name='towed_vehicle_loan_duration'
      value={dp.name}
      onChange={handleChange}
    />
    <InputDataNumber
      label="E39: Valeur de revente (€)"
      id='E39'
      name='tv_resale_value'
      value={dp.name}
      onChange={handleChange}
    />
    <InputDataNumber
      label="E41: Durée du contrat (mois) (1) ou (2) "
      id='E41'
      name='tv_contract_length'
      value={dp.name}
      onChange={handleChange}
    />
    <InputDataNumber
      label="E42: Montant mensuel du loyer (€) (1) ou (2)"
      id='E42'
      name='tv_monthly_rental_amount'
      value={dp.name}
      onChange={handleChange}
    />
    <InputDataNumber
      label="E43: Valeur optionnelle d'achat (€) (1)"
      id='E43'
      name='tv_optional_purchase_value'
      value={dp.name}
      onChange={handleChange}
    />
    </div>
  )
}


export default DataPackage5