import './App.css';
import AdminHomePage from './pages/AdminHomePage'
import SalesHomePage from './pages/SalesHomePage';
import FinancialHomePage from './pages/FinancialHomePage'
import DBCHomePage from './pages/DBCHomePage'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SalesHomePage />
      </header>
    </div>
  );
}

export default App;
