import React from 'react';
import AdminNewUser from '../components/AdminNewUser';
import Footer from '../components/Footer';
import AdminMenu from '../components/AdminMenu';

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