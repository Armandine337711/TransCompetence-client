import React from 'react';
import AdminMenu from '../components/AdminMenu';
import Footer from '../components/Footer';
import UserAccount from '../components/UserAccount';

const AdminAccount = () => {
  return (
    <>
      <AdminMenu />
      <div className="MainBack">
        <div className="MainBloc">
          <UserAccount />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminAccount;