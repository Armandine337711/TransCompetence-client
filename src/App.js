import './App.css';
import AdminHomePage from './pages/AdminHomePage'
import SalesHomePage from './pages/SalesHomePage';
import FinancialHomePage from './pages/FinancialHomePage'
import DBCHomePage from './pages/DBCHomePage'
import DataEntries from './pages/DataEntries'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DataEntries />
      </header>
    </div>
  );
}

export default App;
