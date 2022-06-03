import React, { Component, useState } from 'react'
import InputDataNumber from './InputDataNumber';
import InputDataText from './InputDataText';
import '../../style/style.css'

const DataPackage6 = () => {
  const [dp, setDp] =useState({
    yearly_insurance_amount: '',
    yearly_goods_carried_insurance_amount: '',
    yearly_axle_tax:'',
    yearly_structural_cost:'',
});

const handleChange = (name, data) => {
  setDp(truc => ({ ...truc, [name]: data }))
}; 
  return (
    <div>
      <InputDataNumber
        label="E45: Montant annuel de l'assurance d'un véhicule RC + VI (€/an)"
        id='E45'
        name='yearly_insurance_amount'
        value={dp.name}
        onChange={handleChange} 
      />
      <InputDataNumber
        label="E46: Montant annuel de l'assurance marchandises transportées par véhicule (€/an)"
        id='E46'
        name='yearly_goods_carried_insurance_amount'
        value={dp.name}
        onChange={handleChange}
      />
      <InputDataNumber
        label="E47: Montant annuel de taxe à l'essieu (€/an)"
        id='E47'
        name='yearly_axle_tax'
        value={dp.name}
        onChange={handleChange}
      />
      <InputDataNumber
        label="E48: Montant annuel des coûts de structure par véhicule (€/an)"
        id='E48'
        name='yearly_structural_cost'
        value={dp.name}
        onChange={handleChange}
      />
    </div>
  )
}


export default DataPackage6