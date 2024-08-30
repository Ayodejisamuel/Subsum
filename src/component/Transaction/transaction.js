import React from "react";
import './transaction.css'
import Welcome from "../Welcome/welcome";
import Sidebar from "../Sidebar/sidebar";


const Transaction = () => {  
    return(
        <div className="containerr">
      <Sidebar />
      <div className="login-wrapper">
        <div className="welcome-container">
          <Welcome username="Transaction  HIstory" />

          </div>
          </div>
          </div>
    )

}

export default Transaction; 