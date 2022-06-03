import React, { Component, useState } from 'react'
import InputDataNumber from './InputDataNumber';
import InputDataText from './InputDataText';
import ValidateFinancialData from '../ValidateFinancialData';
import '../../style/style.css'

const DataPackage7 = () => {
  const [dp, setDp] =useState({
    nb_driver_per_vehicle: '',
    yearly_activity_driver: '',
    monthly_working_time:'',
    monthly_driving_time:'',
    monthly_working_days:'',
    monthly_driver_salary: '',
    yearly_bonuses:'',
    employment_contribution_rate:'',
    yearly_travel_allowance:'',
    nb_paid_month:'',
});

const handleChange = (name, data) => {
  setDp(truc => ({ ...truc, [name]: data }))
}; 
  return (
    <form>
      <InputDataNumber
        label="E49: Nombre de conducteur(s) affecté(s) à l'exploitation du véhicule"
        id='E49'
        name='nb_driver_per_vehicle'
        value={dp.name}
        onChange={handleChange}
      />
      <InputDataNumber
        label="E50: Nombre de jours d'activité par an d'un conducteur"
        id='E50'
        name='yearly_activity_driver'
        value={dp.name}
        onChange={handleChange}
      />
      <InputDataNumber
        label="E51: Temps de service mensuel (heures)"
        id='E51'
        name='monthly_working_time'
        value={dp.name}
        onChange={handleChange}
      />
      <InputDataNumber
        label="E52: Temps de conduite mensuel (heures)"
        id='E52'
        name='monthly_driving_time'
        value={dp.name}
        onChange={handleChange}
      />
      <InputDataNumber
        label="E53: Nombre de jours travaillés par mois"
        id='E53'
        name='monthly_working_days'
        value={dp.name}
        onChange={handleChange}
      />
      <InputDataNumber
        label="E54: Salaire mensuel brut (€/mois)"
        id='E54'
        name='monthly_driver_salary'
        value={dp.name}
        onChange={handleChange}
      />
      <InputDataNumber
        label="E55: Primes annuelles (€/an)"
        id='E55'
        name='yearly_bonuses'
        value={dp.name}
        onChange={handleChange}
      />
      <InputDataNumber
        label="E56: Taux de cotisations employeurs (%)"
        id='E56'
        name='employment_contribution_rate'
        value={dp.name}
        onChange={handleChange}
      />
      <InputDataNumber
        label="E57: Indemnités de déplacement par an (€/an)"
        id='E57'
        name='yearly_travel_allowance'
        value={dp.name}
        onChange={handleChange}
      />
      <InputDataNumber
        label="E58: Nombre de mois payés"
        id='E58'
        name='nb_paid_month'
        value={dp.name}
        onChange={handleChange}
      />
      <ValidateFinancialData datas= {dp}/>
    </form>
  )
}


export default DataPackage7