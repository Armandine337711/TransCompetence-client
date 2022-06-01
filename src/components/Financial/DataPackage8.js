import React, { Component, useState } from 'react'
import InputDataNumber from './InputDataNumber';
import InputDataText from './InputDataText';
import '../../style/style.css'

const DataPackage8 = () => {
  const [name,setName] = useState({name:'DataPackage8'});
  return (
    <div>
      <InputDataText
        label="E59: Libellé de la composante de coût (texte libre)"
        id='E59'
        name='cost_component_label'
      />
      <InputDataText
        label="E60: Unité d'œuvre correspondant (texte libre)"
        id='E60'
        name='cost_component_unit'
      />
      <InputDataText
        label="E61: Nombre d'unité essai2 utilisé par an"
        id='E61'
        name='nb_trying_unit'
      />
      <InputDataText
        label="E62: Montant annuel imputable à ce coût  (€/an)"
        id='E62'
        name='yearly_amount_cist_component'
      />
    </div>
  )
}


export default DataPackage8