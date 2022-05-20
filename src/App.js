import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AdminHomePage from './pages/AdminHomePage'
import SalesDataPage from './pages/SalesDataPage';
import FinancialHomePage from './pages/FinancialHomePage'
import DBCHomePage from './pages/DBCHomePage'
import SalesHistoryPage from './pages/SalesHistoryPage';
import UserConnection from './pages/UserConnection'
import AdminNewUserPage from './pages/AdminNewUserPage'


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserConnection />} />
        <Route path="/saleshistory" element={<SalesHistoryPage />} />
        <Route path="/salesdata" element={<SalesDataPage />} />

        <Route path="/adminhome" element={<AdminHomePage />} />
        <Route path="/adminnewuser" element={<AdminNewUserPage />} />



        <Route path="/financialhome" element={<FinancialHomePage />} />


      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
