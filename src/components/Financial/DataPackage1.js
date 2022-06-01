import React, { Component, useState } from 'react'
import InputDataNumber from './InputDataNumber';
import InputDataText from './InputDataText';
import '../../style/style.css'


const DataPackage1 = () => {
  const [name,setName] = useState({name:'DataPackage1'});
  return (
    <div>
      <InputDataText
        label="E01: Kilométrage annuel moyen du véhicule(km)"
        id='E01'
        name= 'yearly_mileage'
      />
      <InputDataText
        label="E02: Dont kilométrage en charge (km)"
        id='E02'
        name='in_charge_mileage'
      />
      <InputDataText
        label="E03: Nombre de véhicules tractés pour un véhicule moteur"
        id='E03'
        name='nb_towed_vehicles'
      />
      <InputDataText
        label="E04: Nombre de jours d'exploitation du véhicule moteur par an"
        id='E04'
        name='nb_days_in_operation'
      />
      <InputDataText
        label='E05: Unité de chargement (texte libre)'
        id='E05'
        name='loading_unit_id'
      />
      <InputDataText
        label="E06: Capacité de chargement (correspondant à l'unité ci-dessus)"
        id='E06'
        name='loading_capacity'
      />
      <InputDataText
        label="E07: Coefficient d'utilisation de cette capacité (%)"
        id='E07'
        name='capacity_utilisation_factor'
      />
    </div>
  )
}


export default DataPackage1