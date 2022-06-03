import React, { Component, useState } from 'react'
import InputDataNumber from './InputDataNumber';
import InputDataText from './InputDataText';
import ValidateFinancialData from '../ValidateFinancialData';
import '../../style/style.css'

const DataPackage8 = () => {
  const [dp, setDp] =useState({
    cost_component_label: '',
    cost_component_unit: '',
    nb_trying_unit:'',
    yearly_amount_cist_component:'',
});

const handleChange = (name, data) => {
  setDp(truc => ({ ...truc, [name]: data }))
}; 
  return (
    <form>
      <InputDataText
        label="E59: Libellé de la composante de coût (texte libre)"
        id='E59'
        name='cost_component_label'
        value={dp.name}
        onChange={handleChange}
      />
      <InputDataText
        label="E60: Unité d'œuvre correspondant (texte libre)"
        id='E60'
        name='cost_component_unit'
        value={dp.name}
        onChange={handleChange}
      />
      <InputDataNumber
        label="E61: Nombre d'unité essai2 utilisé par an"
        id='E61'
        name='nb_trying_unit'
        value={dp.name}
        onChange={handleChange}
      />
      <InputDataNumber
        label="E62: Montant annuel imputable à ce coût  (€/an)"
        id='E62'
        name='yearly_amount_cist_component'
        value={dp.name}
        onChange={handleChange}
      />
      <ValidateFinancialData datas= {dp}/>
    </form>
  )
}


export default DataPackage8