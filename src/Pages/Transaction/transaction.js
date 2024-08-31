import React from "react";
import "./transaction.css";
import Welcome from "../../component/Welcome/welcome";
import Sidebar from "../../component/Sidebar/sidebar";
import notificationIcon from '../../Images/notificationicon.png'
import userIcon from '../../Images/usericon (1).png'

const Transaction = () => {
  return (
    <div id="transaction-history" className="containerr">
      <Sidebar />
      <div className="login-wrapper">
        <div className="welcome-container">
          <Welcome username="Transaction  History" 
             notificationIcon={notificationIcon}
             userIcon={userIcon}
             showUpgrade={true}/>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
