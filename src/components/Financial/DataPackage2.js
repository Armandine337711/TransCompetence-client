import React, { Component, useState } from 'react'
import InputDataNumber from './InputDataNumber';
import InputDataText from './InputDataText';
import '../../style/style.css'


const DataPackage2 = () => {
  const [name,setName] = useState({name:'DataPackage2'});
  return (
    <div>
      <InputDataText
        label="E08: Consommation de Gazole aux 100 km (litre pour 100 km)"
        id='E08'
        name='gazoline_consumption'        />
      <InputDataText
        label="E09: Prix moyen du litre de Gazole route (hors toutes taxes récupérables) (€)"
        id='E09'
        name='average_price_liter'
      />
      <InputDataText
        label="E10: Part de l'approvisionnement citerne (%)"
        id='E10'
        name='proportion_tanker_supply'
      />
      <InputDataText
        label="E11: Prix moyen du litre de Gazole citerne (hors toutes taxes récupérables) (€)"
        id='E11'
        name='average_price_liter_tanker'
      />
    </div>
  )
}


export default DataPackage2