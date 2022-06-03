import React, { Component, useState } from 'react'
import InputDataNumber from './InputDataNumber';
import InputDataText from './InputDataText';
import '../../style/style.css'


const DataPackage2 = () => {
  const [dp, setDp] =useState({
    gazoline_consumption: '',
    average_price_liter: '',
    proportion_tanker_supply:'',
    average_price_liter_tanker:'',
});

const handleChange = (name, data) => {
  setDp(truc => ({ ...truc, [name]: data }))
}; 
  return (
    <div>
      <InputDataNumber
        label="E08: Consommation de Gazole aux 100 km (litre pour 100 km)"
        id='E08'
        name='gazoline_consumption'        
        value={dp.name}
        onChange={handleChange}
        />
      <InputDataNumber
        label="E09: Prix moyen du litre de Gazole route (hors toutes taxes récupérables) (€)"
        id='E09'
        name='average_price_liter'
        value={dp.name}
        onChange={handleChange}
      />
      <InputDataNumber
        label="E10: Part de l'approvisionnement citerne (%)"
        id='E10'
        name='proportion_tanker_supply'
        value={dp.name}
        onChange={handleChange}
      />
      <InputDataNumber
        label="E11: Prix moyen du litre de Gazole citerne (hors toutes taxes récupérables) (€)"
        id='E11'
        name='average_price_liter_tanker'
        value={dp.name}
        onChange={handleChange}
      />
    </div>
  )
}


export default DataPackage2