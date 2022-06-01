import React, { Component, useState } from 'react'
import InputDataNumber from './InputDataNumber';
import InputDataText from './InputDataText';
import '../../style/style.css'

const DataPackage7 = () => {
  const [name,setName] = useState({name:'DataPackage7'});
  return (
    <div>
      <InputDataText
        label="E49: Nombre de conducteur(s) affecté(s) à l'exploitation du véhicule"
        id='E49'
        name='nb_driver_per_vehicle'
      />
      <InputDataText
        label="E50: Nombre de jours d'activité par an d'un conducteur"
        id='E50'
        name='yearly_activity_driver'
      />
      <InputDataText
        label="E51: Temps de service mensuel (heures)"
        id='E51'
        name='monthly_working_time'
      />
      <InputDataText
        label="E52: Temps de conduite mensuel (heures)"
        id='E52'
        name='monthly_driving_time'
      />
      <InputDataText
        label="E53: Nombre de jours travaillés par mois"
        id='E53'
        name='monthly_working_days'
      />
      <InputDataText
        label="E54: Salaire mensuel brut (€/mois)"
        id='E54'
        name='monthly_driver_salary'
      />
      <InputDataText
        label="E55: Primes annuelles (€/an)"
        id='E55'
        name='yearly_bonuses'
      />
      <InputDataText
        label="E56: Taux de cotisations employeurs (%)"
        id='E56'
        name='employment_contribution_rate'
      />
      <InputDataText
        label="E57: Indemnités de déplacement par an (€/an)"
        id='E57'
        name='yearly_travel_allowance'
      />
      <InputDataText
        label="E58: Nombre de mois payés"
        id='E58'
        name='nb_paid_month'
      />
    </div>
  )
}


export default DataPackage7