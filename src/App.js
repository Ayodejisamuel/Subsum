import './App.css';
import Login from './Pages/Login/login'
import Dashbboard from './Pages/Dashbboard/dashbboard'
import Dashboard from './Pages/Dashboard/dashboard';
import Airtime from './Pages/Airtime/airtime';
import Support from './Pages/Support/support';
// import Transanction from './Pages/Transanction/transanction';
import Transaction from './Pages/Transaction/transaction';

function App() {
  return (
    <div className="App">

       <Login/>
       <Dashbboard />
       < Dashboard />
       <Airtime />
       <Transaction />
       <Support />
      
       {/* <Transanction/> */}
       
    </div>
  );
}

export default App;
