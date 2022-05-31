import React from 'react';
import Footer from '../components/Footer';
import AdminMenu from '../components/Admin/AdminMenu';
import AdminComp from '../components/Admin/AdminComp';

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