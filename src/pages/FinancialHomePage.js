import React from 'react';
import FinancialMenu from '../components/FinancialMenu'
import Onglets from '../components/Onglets';
import Footer from '../components/Footer'
import '../style/style.css'
import InputDataNumber from '../components/InputDataNumber';

const FinancialHomePage = () => {
  return (
    <>
      <FinancialMenu />
      <div className="MainBack">
        <div className="MainBloc">
          
          <Onglets/>
          

        </div>
      </div>
      <Footer />
    </>
  );
};

export default FinancialHomePage;