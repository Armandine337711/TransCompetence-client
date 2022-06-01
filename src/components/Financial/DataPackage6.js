import React, { Component, useState } from 'react'
import InputDataNumber from './InputDataNumber';
import InputDataText from './InputDataText';
import '../../style/style.css'

const DataPackage6 = () => {
  const [name,setName] = useState({name:'DataPackage6'});
  return (
    <div>
      <InputDataText
        label="E45: Montant annuel de l'assurance d'un véhicule RC + VI (€/an)"
        id='E45'
        name='yearly_insurance_amount'
      />
      <InputDataText
        label="E46: Montant annuel de l'assurance marchandises transportées par véhicule (€/an)"
        id='E46'
        name='yearly_goods_carried_insurance_amount'
      />
      <InputDataText
        label="E47: Montant annuel de taxe à l'essieu (€/an)"
        id='E47'
        name='yearly_axle_tax'
      />
      <InputDataText
        label="E48: Montant annuel des coûts de structure par véhicule (€/an)"
        id='E48'
        name='yearly_structural_cost'
      />
    </div>
  )
}


export default DataPackage6