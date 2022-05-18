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
import DataPackage9 from '../components/DataPackage9';
import DataPackage10 from '../components/DataPackage10';
import DataPackage11 from '../components/DataPackage11';
import DataPackage12 from '../components/DataPackage12';
import DataPackage13 from '../components/DataPackage13';
import DataPackage14 from '../components/DataPackage14';
import DataPackage15 from '../components/DataPackage15';
import DataPackage16 from '../components/DataPackage16';
import DataPackage17 from '../components/DataPackage17';
import DataPackage18 from '../components/DataPackage18';

export default function Onglets() {
    const [stateOnglets, setStateOnglets] = useState(5);

    const go1 = () => {
        setStateOnglets(1);
    }
    const go2 = () => {
        setStateOnglets(2);
    }
    const go3 = () => {
        setStateOnglets(3);
    }
    const go4 = () => {
        setStateOnglets(4);
    }
    const go5 = () => {
        setStateOnglets(5);
    }
    const go6 = () => {
        setStateOnglets(6);
    }
    const go7 = () => {
        setStateOnglets(7);
    }
    const go8 = () => {
        setStateOnglets(8);
    }
    const go9 = () => {
        setStateOnglets(9);
    }
    const go10 = () => {
        setStateOnglets(10);
    }
    const go11 = () => {
        setStateOnglets(11);
    }
    const go12 = () => {
        setStateOnglets(12);
    }
    const go13 = () => {
        setStateOnglets(13);
    }
    const go14 = () => {
        setStateOnglets(14);
    }
    const go15 = () => {
        setStateOnglets(15);
    }
    const go16 = () => {
        setStateOnglets(16);
    }
    const go17 = () => {
        setStateOnglets(17);
    }
    const go18 = () => {
        setStateOnglets(18);
    }
  return (
    <div>
        <div className='contButton'>
            <div onClick={go1} className={`onglets ${stateOnglets === 1 ? "active" : ""}`}>Data 1</div>
            <div onClick={go2} className={`onglets ${stateOnglets === 2 ? "active" : ""}`}>Data 2</div>
            <div onClick={go3} className={`onglets ${stateOnglets === 3 ? "active" : ""}`}>Data 3</div>
            <div onClick={go4} className={`onglets ${stateOnglets === 4 ? "active" : ""}`}>Data 4</div>
            <div onClick={go5} className={`onglets ${stateOnglets === 5 ? "active" : ""}`}>Data 5</div>
            <div onClick={go6} className={`onglets ${stateOnglets === 6 ? "active" : ""}`}>Data 6</div>
            <div onClick={go7} className={`onglets ${stateOnglets === 7 ? "active" : ""}`}>Data 7</div>
            <div onClick={go8} className={`onglets ${stateOnglets === 8 ? "active" : ""}`}>Data 8</div>
            <div onClick={go9} className={`onglets ${stateOnglets === 9 ? "active" : ""}`}>Data 9</div>
            <div onClick={go10} className={`onglets ${stateOnglets === 10 ? "active" : ""}`}>Data 10</div>
            <div onClick={go11} className={`onglets ${stateOnglets === 11 ? "active" : ""}`}>Data 11</div>
            <div onClick={go12} className={`onglets ${stateOnglets === 12 ? "active" : ""}`}>Data 12</div>
            <div onClick={go13} className={`onglets ${stateOnglets === 13 ? "active" : ""}`}>Data 13</div>
            <div onClick={go14} className={`onglets ${stateOnglets === 14 ? "active" : ""}`}>Data 14</div>
            <div onClick={go15} className={`onglets ${stateOnglets === 15 ? "active" : ""}`}>Data 15</div>
            <div onClick={go16} className={`onglets ${stateOnglets === 16 ? "active" : ""}`}>Data 16</div>
            <div onClick={go17} className={`onglets ${stateOnglets === 17 ? "active" : ""}`}>Data 17</div>
            <div onClick={go18} className={`onglets ${stateOnglets === 18 ? "active" : ""}`}>Data 18</div>
        </div>
        <div className='container'>
            {stateOnglets === 1 ?  <DataPackage1/>:null}
            {stateOnglets === 2 ?  <DataPackage2/>:null}
            {stateOnglets === 3 ?  <DataPackage3/>:null}
            {stateOnglets === 4 ?  <DataPackage4/>:null}
            {stateOnglets === 5 ?  <DataPackage5/>:null}
            {stateOnglets === 6 ?  <DataPackage6/>:null}
            {stateOnglets === 7 ?  <DataPackage7/>:null}
            {stateOnglets === 8 ?  <DataPackage8/>:null}
            {stateOnglets === 9 ?  <DataPackage9/>:null}
            {stateOnglets === 10 ?  <DataPackage10/>:null}
            {stateOnglets === 11 ?  <DataPackage11/>:null}
            {stateOnglets === 12 ?  <DataPackage12/>:null}
            {stateOnglets === 13 ?  <DataPackage13/>:null}
            {stateOnglets === 14 ?  <DataPackage14/>:null}
            {stateOnglets === 15 ?  <DataPackage15/>:null}
            {stateOnglets === 16 ?  <DataPackage16/>:null}
            {stateOnglets === 17 ?  <DataPackage17/>:null}
            {stateOnglets === 18 ?  <DataPackage18/>:null}
        </div>
    </div>
  )
}

