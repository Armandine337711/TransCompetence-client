import React from 'react';
import Footer from '../components/Footer';
import AdminMenu from '../components/AdminMenu';
import AdminComp from '../components/AdminComp';

const Admin = () => {
  return (
    <>
      <AdminMenu />
      <div className="MainBack">
        <AdminComp />
      </div>
      <Footer />
    </>
  );
};

export default Admin;