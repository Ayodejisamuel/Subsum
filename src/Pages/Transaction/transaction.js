import React from "react";
import './transaction.css'
import Welcome from "../../component/Welcome/welcome";
import Sidebar from "../../component/Sidebar/sidebar";


const Transaction = () => {  
    return(
        <div className="containerr">
      <Sidebar />
      <div className="login-wrapper">
        <div className="welcome-container">
          <Welcome username="Transaction  History" />

          </div>
          </div>
          </div>
    )

}

export default Transaction; 