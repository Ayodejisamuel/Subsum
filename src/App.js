import './App.css';
import Login from './component/Login/login';
 import Dashboard from './component/Dashboard/dashboard';
 import Airtime from './component/Airtime/airtime';
 import Support from './component/Support/support';
 import Transanction from './component/Transaction/transaction';
 
 

function App() {
  return (
    <div className="App">
       <Login/>
       < Dashboard />
       <Airtime />
       <Support />
       <Transanction/>
       
    </div>
  );
}

export default App;
