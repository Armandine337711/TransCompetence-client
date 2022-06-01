import React from 'react';
import AdminNewUser from '../components/Admin/AdminNewUser';
import Footer from '../components/Footer';
import AdminMenu from '../components/Admin/AdminMenu';

const AdminNewsUserPage = () => {
  return (
    <>
    <AdminMenu />
    <div className="MainBack">
      <div className="MainBloc">
        <AdminNewUser />
        
      </div>
    </div>
    <Footer />
  </>
  );
};

export default AdminNewsUserPage;