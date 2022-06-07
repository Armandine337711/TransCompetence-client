import React from 'react';
import SalesHeader from '../components/Sales/SalesHeader';
import Footer from '../components/Footer.js'
import SalesDatas from '../components/Sales/SalesDatas';

const SalesHomePage = () => {
  
  return (
    <>
      <SalesHeader />
        <div className="MainBack">
          <div className="MainBloc">
            <SalesDatas/>
          </div>
        </div>

      
      <Footer />
    </>
  );
};

export default SalesHomePage;