import React from 'react';
import SalesHeader from '../components/SalesHeader';
import Footer from '../components/Footer.js'
import SalesData from '../components/SalesData';
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