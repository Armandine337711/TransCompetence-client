import React, { Component, useState } from 'react'
import InputDataNumber from './InputDataNumber';
import InputDataText from './InputDataText';
import '../../style/style.css'

const DataPackage3 = () => {
  const [name,setName] = useState({name:'DataPackage32'});
  return (
    <div>
      <InputDataText
        label="E12: Coûts kilométriques pneumatiques globaux (€/km)"
        id='E12'
        name='km_cost_tyres'
      />
      <InputDataText
        label="E13: Nombre de pneus Véhicule moteur"
        id='E13'
        name='nb_tyres_motor_vehicle'
      />
      <InputDataText
        label="E14: Nombre de pneus Véhicule tracté"
        id='E15'
        name='nb_tyres_towed_vehicle'
      />
      <InputDataText
        label="E15: Prix d'un pneu (€) Véhicule moteur"
        id='E15'
        name='price_tyre_motor_vehicle'
      />
      <InputDataText
        label="E16: Prix d'un pneu (€) Véhicule tracté"
        id='E16'
        name='price_tyre_towed_vehicle'
      />
      <InputDataText
        label="E17: Durée de vie (km) Véhicule moteur"
        id='E17'
        name='lifetime_motor_vehicle'
      />
      <InputDataText
        label="E18: Durée de vie (km) Véhicule tracté"
        id='E18'
        name='lifetime_towed_vehicle'
      />
      <InputDataText
        label="E19: Dépenses annuelles d'entretien-réparations par véhicule (€)"
        id='E19'
        name='yearly_maintenance_cost'
      />
      <InputDataText
        label="E20: Dépenses annuelles de péages (€)"
        id='E20'
        name='yearly_toll_cost'
      />
  </div>
  )
}


export default DataPackage3