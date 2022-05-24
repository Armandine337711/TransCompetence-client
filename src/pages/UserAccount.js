import React from 'react';
import DeconnectionButton from '../components/DeconnectionButton';
import Header from '../components/Header';
import Footer from '../components/Footer'
import Account from '../components/Account';

const UserAccount = () => {
  return (
    <div>
      <Header />
      <div className="MainBack">
        <div className="MainBloc">
          <Account />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserAccount;