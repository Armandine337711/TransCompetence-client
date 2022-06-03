import React, { Component, useState } from 'react'
import InputDataNumber from './InputDataNumber';
import InputDataText from './InputDataText';
import '../../style/style.css'
import ValidateFinancialData from '../ValidateFinancialData';


const DataPackage1 = () => {
  const [dp, setDp] =useState({
        yearly_mileage: '',
        in_charge_mileage: '',
        nb_towed_vehicles:'',
        nb_days_in_operation:'',
        loading_unit: '',
        loading_capacity:'',
        capacity_utilisation_factor:'',
    });
    
    const handleChange = (name, data) => {
      setDp(truc => ({ ...truc, [name]: data }))
  }; 

  return (
    <form>
      <InputDataNumber
        label="E01: Kilométrage annuel moyen du véhicule(km)"
        id='E01'
        name= 'yearly_mileage'
        value={dp.name}
        onChange={handleChange}
      />
      <InputDataNumber
        label="E02: Dont kilométrage en charge (km)"
        id='E02'
        name='in_charge_mileage'
        value={dp.name}
        onChange={handleChange}
      />
      <InputDataNumber
        label="E03: Nombre de véhicules tractés pour un véhicule moteur"
        id='E03'
        name='nb_towed_vehicles'
        value={dp.name}
        onChange={handleChange}
      />
      <InputDataNumber
        label="E04: Nombre de jours d'exploitation du véhicule moteur par an"
        id='E04'
        name='nb_days_in_operation'
        value={dp.name}
        onChange={handleChange}
      />
      <InputDataText
        label='E05: Unité de chargement (texte libre)'
        id='E05'
        name='loading_unit'
        value={dp.name}
        onChange={handleChange}
      />
      <InputDataNumber
        label="E06: Capacité de chargement (correspondant à l'unité ci-dessus)"
        id='E06'
        name='loading_capacity'
        value={dp.name}
        onChange={handleChange}
      />
      <InputDataNumber
        label="E07: Coefficient d'utilisation de cette capacité (%)"
        id='E07'
        name='capacity_utilisation_factor'
        value={dp.name}
        onChange={handleChange}
      />
      <ValidateFinancialData datas= {dp}/>
    </form>
    
  )
}

export default DataPackage1