import React, {useState} from 'react';
import '../style/style.css'

import DataPackage1 from './DataPackage1';
import DataPackage2 from '../components/DataPackage2';
import DataPackage3 from '../components/DataPackage3';
import DataPackage4 from '../components/DataPackage4';
import DataPackage5 from '../components/DataPackage5';
import DataPackage6 from '../components/DataPackage6';
import DataPackage7 from '../components/DataPackage7';
import DataPackage8 from '../components/DataPackage8';
import ValidateFinancialData from './ValidateFinancialData';


const Onglets = () => {
    const [stateOnglets, setStateOnglets] = useState(1);
    const go1 = () => {setStateOnglets(1);}
    const go2 = () => {setStateOnglets(2);}
    const go3 = () => {setStateOnglets(3);}
    const go4 = () => {setStateOnglets(4);}
    const go5 = () => {setStateOnglets(5);}
    const go6 = () => {setStateOnglets(6);}
    const go7 = () => {setStateOnglets(7);}
    const go8 = () => {setStateOnglets(8);}
  return (
    <div>
        <div className='contButton'>
            <div onClick={go1} className={`onglets ${stateOnglets === 1 ? "active" : ""}`}>Infos générales</div>
            <div onClick={go2} className={`onglets ${stateOnglets === 2 ? "active" : ""}`}>Carburant</div>
            <div onClick={go3} className={`onglets ${stateOnglets === 3 ? "active" : ""}`}>Entretien, pneus, péages</div>
            <div onClick={go4} className={`onglets ${stateOnglets === 4 ? "active" : ""}`}>Véhicules moteurs</div>
            <div onClick={go5} className={`onglets ${stateOnglets === 5 ? "active" : ""}`}>Véhicules tractés</div>
            <div onClick={go6} className={`onglets ${stateOnglets === 6 ? "active" : ""}`}>Assurances et structure</div>
            <div onClick={go7} className={`onglets ${stateOnglets === 7 ? "active" : ""}`}>Salaires</div>
            <div onClick={go8} className={`onglets ${stateOnglets === 8 ? "active" : ""}`}>Autres coûts</div>
        </div>
        <div className='container'>
            <form>
                {stateOnglets === 1 ?  <DataPackage1/>:null}
                {stateOnglets === 2 ?  <DataPackage2/>:null}
                {stateOnglets === 3 ?  <DataPackage3/>:null}
                {stateOnglets === 4 ?  <DataPackage4/>:null}
                {stateOnglets === 5 ?  <DataPackage5/>:null}
                {stateOnglets === 6 ?  <DataPackage6/>:null}
                {stateOnglets === 7 ?  <DataPackage7/>:null}
                {stateOnglets === 8 ?  <DataPackage8/>:null}
                <ValidateFinancialData />
            </form>
        </div>
    </div>
  )
}

export default Onglets;