import React from 'react';
import FinancialMenu from '../components/Financial/FinancialMenu'
import Onglets from '../components/Financial/Onglets';
import Footer from '../components/Footer'
import '../style/style.css'
import InputDataNumber from '../components/Financial/InputDataNumber';

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