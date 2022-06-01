import React, { Component, useState } from 'react'
import InputDataNumber from './InputDataNumber';
import InputDataText from './InputDataText';
import '../../style/style.css'


const DataPackage5 = () => {
  const [name,setName] = useState({name:'DataPackage5'});
  return (
    <div>
    <InputDataText
      label="E33: Durée d'utilisation du véhicule tracté (ans)"
      id='E33'
      name='duration_towed_vehicle'
    />
    <InputDataText
      label="E34: Mode de financement du véhicule tracté (1 pour Emprunt, 2 pour Crédit Bail, 3 pour Location Financière)"
      id='E34'
      name=''
    />
    <InputDataText
      label="E35: Valeur du véhicule tracté (€) "
      id='E35'
      name='value_towed_vehicle'
    />
    <InputDataText
      label="E36: Montant de l'emprunt (€)"
      id='E36'
      name='towed_vehicle_loan_amount'
    />
    <InputDataText
      label="E37: Taux d'intérêt de l'emprunt (%) "
      id='E37'
      name='towed_vehicle_borrowing_rate'
    />
    <InputDataText
      label="E38: Durée de l'emprunt (mois)"
      id='E38'
      name='towed_vehicle_loan_duration'
    />
    <InputDataText
      label="E39: Valeur de revente (€)"
      id='E39'
      name='tv_resale_value'
    />
    <InputDataText
      label="E41: Durée du contrat (mois) (1) ou (2) "
      id='E41'
      name='tv_contract_length'
    />
    <InputDataText
      label="E42: Montant mensuel du loyer (€) (1) ou (2)"
      id='E42'
      name='tv_monthly_rental_amount'
    />
    <InputDataText
      label="E43: Valeur optionnelle d'achat (€) (1)"
      id='E43'
      name='tv_optional_purchase_value'
    />
    </div>
  )
}


export default DataPackage5