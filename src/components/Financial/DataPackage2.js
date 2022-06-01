import React, { Component } from 'react'
<<<<<<< HEAD:src/components/DataPackage2.js
import InputDataNumber from '../components/InputDataNumber';
import InputDataText from '../components/InputDataText';
import '../style/style.css'
=======
import InputDataNumber from './InputDataNumber';
import '../../style/style.css'
>>>>>>> 8f859615262750a63ee68ebc7c34c093adcaa278:src/components/Financial/DataPackage2.js

export class DataPackage2 extends Component {
  render() {
    return (
      <div>
        <InputDataText
          label="E08: Consommation de Gazole aux 100 km (litre pour 100 km)"
          id='E08'
        />
        <InputDataText
          label="E09: Prix moyen du litre de Gazole route (hors toutes taxes récupérables) (€)"
          id='E09'
        />
        <InputDataText
          label="E10: Part de l'approvisionnement citerne (%)"
          id='E10'
        />
        <InputDataText
          label="E11: Prix moyen du litre de Gazole citerne (hors toutes taxes récupérables) (€)"
          id='E11'
        />
      </div>
    )
  }
}

export default DataPackage2