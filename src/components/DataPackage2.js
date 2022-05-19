import React, { Component } from 'react'
import InputDataNumber from '../components/InputDataNumber';
import '../style/style.css'

export class DataPackage2 extends Component {
  render() {
    return (
      <>
        <InputDataNumber
        label="E08: Consommation de Gazole aux 100 km (litre pour 100 km)"
        id='E08'
        />
        <InputDataNumber
        label="E09: Prix moyen du litre de Gazole route (hors toutes taxes récupérables) (€)"
        id='E09'
        />
        <InputDataNumber
        label="E10: Part de l'approvisionnement citerne (%)"
        id='E10'
        />
        <InputDataNumber
        label="E11: Prix moyen du litre de Gazole citerne (hors toutes taxes récupérables) (€)"
        id='E11'
        />
      </>
    )
  }
}

export default DataPackage2