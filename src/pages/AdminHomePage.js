import React from 'react';
import AdminMenu from '../components/AdminMenu';
import AdminUserList from '../components/AdminUserList';
import Footer from '../components/Footer';


const AdminHomePage = () => {
  return (
    <>
      <AdminMenu />
      <div className="MainBack">
        <div className="MainBloc">
          <AdminUserList />
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminHomePage;