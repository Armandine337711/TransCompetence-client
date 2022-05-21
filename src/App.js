import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AdminHomePage from './pages/AdminHomePage'
import SalesDataPage from './pages/SalesDataPage';
import FinancialHomePage from './pages/FinancialHomePage'
import DBCHomePage from './pages/DBCHomePage'
import SalesHistoryPage from './pages/SalesHistoryPage';
import UserConnection from './pages/UserConnection'
import AdminNewUserPage from './pages/AdminNewUserPage'
import FinancialAccount from './pages/FinancialAccount';
import SalesAccount from './pages/SalesAccount';
import AdminAccount from './pages/AdminAccount';
import Financial from './pages/Financial';
import Sales from './pages/Sales';
import Admin from './pages/Admin';




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


        <Route path="/financialaccount" element={<FinancialAccount />} />
        <Route path="/salesaccount" element={<SalesAccount />} />
        <Route path="/adminaccount" element={<AdminAccount />} />

        <Route path="/financial" element={<Financial />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/admin" element={<Admin />} />



      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
