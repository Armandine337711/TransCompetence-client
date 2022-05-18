import React from 'react';
import FinancialMenu from '../components/FinancialMenu'
import Onglets from '../components/Onglets';
import Footer from '../components/Footer'

const FinancialHomePage = () => {
  return (
    <>
      <FinancialMenu />
      <Onglets/>
        
      <Footer />
    </>
  );
};

export default FinancialHomePage;