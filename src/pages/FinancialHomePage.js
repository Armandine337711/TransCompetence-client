import React from 'react';
import FinancialMenu from '../components/FinancialMenu'
import Onglets from '../components/Onglets';
import Footer from '../components/Footer'

const FinancialHomePage = () => {
  return (
    <div>
      <FinancialMenu />
      <Onglets/>
        
      <Footer />
    </div>
  );
};

export default FinancialHomePage;