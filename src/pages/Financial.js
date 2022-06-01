import React from 'react';
import FinancialMenu from '../components/Financial/FinancialMenu';
import Footer from '../components/Footer';
import FinancialComp from '../components/Financial/FinancialComp';

const Financial = () => {
  return (
    <>
      <FinancialMenu />
      <div className="MainBack">
        <FinancialComp />
      </div>
      <Footer />
    </>
  );
};

export default Financial;