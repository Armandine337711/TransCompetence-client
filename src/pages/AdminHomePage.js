import React from 'react';
import AdminMenu from '../components/Admin/AdminMenu';
import AdminUserList from '../components/Admin/AdminUserList';
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