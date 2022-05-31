import React from 'react';
import SalesHeader from '../components/Sales/SalesHeader';
import Footer from '../components/Footer.js'
import SalesData from '../components/Sales/SalesData';
import ValidateSalesData from '../components/ValidateSalesData';

const SalesHomePage = () => {
  return (
    <>
      <SalesHeader />
      <div className="MainBack">
        <div className="MainBloc">
          <SalesData />
          <ValidateSalesData />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SalesHomePage;