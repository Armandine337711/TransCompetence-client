import React from 'react';
import SalesHeader from '../components/SalesHeader';
import Footer from '../components/Footer';
import SalesComp from '../components/SalesComp';

const Sales = () => {
  return (
    <>
      <SalesHeader />
      <div className="MainBack">
          <SalesComp />
      </div>
      <Footer />
    </>
  );
};

export default Sales;