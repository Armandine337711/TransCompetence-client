import React, { Component } from 'react'
import InputDataNumber from '../components/InputDataNumber';
import InputDataText from '../components/InputDataText';
import '../style/style.css'

export class DataPackage1 extends Component {
  render() {
    return (
      <div>
        <InputDataText
          label="E01: Kilométrage annuel moyen du véhicule(km)"
          id='E01'
        />
        <InputDataText
          label="E02: Dont kilométrage en charge (km)"
          id='E02'
        />
        <InputDataText
          label="E03: Nombre de véhicules tractés pour un véhicule moteur"
          id='E03'
        />
        <InputDataText
          label="E04: Nombre de jours d'exploitation du véhicule moteur par an"
          id='E04'
        />
        <InputDataText
          label='E05: Unité de chargement (texte libre)'
          id='E05'
        />
        <InputDataText
          label="E06: Capacité de chargement (correspondant à l'unité ci-dessus)"
          id='E06'
        />
        <InputDataText
          label="E07: Coefficient d'utilisation de cette capacité (%)"
          id='E07'
        />
      </div>
    )
  }
}

export default DataPackage1