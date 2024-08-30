import React from "react";
import "./sidebar.css";
import logo from "../../Images/logo (2).png";
import dashboard from "../../Images/dashboard-icon.png";
import headphone from "../../Images/headphone.png";
import dropdown from "../../Images/dropdown.png";
import suffing from "../../Images/suffing.png";
import television from "../../Images/telev.png";
import wifi from "../../Images/wifi.png";
import callicon from "../../Images/call-icon.png";
import messagIcon from "../../Images/Icons (2).png";
import transIcon from "../../Images/Icon (5).png";
import logout from "../../Images/logout.png";
import Network from "../Network/network";

const Sidebar = ({ isAirtimeTrue}) => {
  return (
 
        <div className="login-sidebar">
          <div className="login-div">
            <div className="subssum-div">
              <img src={logo} alt="logo"></img> <span>subssum</span>
            </div>
            <div className="dashboard-div">
              <a href="#dashboard" className="dashbtn-div">
                <img src={dashboard} alt="logo"></img> <span>Dashboard</span>
              </a>

              <div className="buydiv-container">
                <a href="#buy-airtime" className="buydiv">
                  <div className="flex-div">
                    <img src={callicon} alt="callIcon"></img>
                    <span>Buy Airtime</span>
                  </div>
                  <img src={dropdown} alt="dropdown"></img>
                </a>
              </div>

              <div className="buydiv-container">
                <a href="#buy-data" className="buydiv">
                  <div className="flex-div">
                    <img src={wifi} alt="wifi"></img>
                    <span>Buy Data</span>
                  </div>
                  <img src={dropdown} alt="dropdown"></img>
                </a>
              </div>

              <div className="buydiv-container">
                <a href="#tv-subscription" className="buydiv">
                  <div className="flex-div">
                    <img src={television} alt="television"></img>
                    <span>Tv Subscription</span>
                  </div>
                  <img src={dropdown} alt="dropdown"></img>
                </a>
              </div>

              <div className="buydiv-container">
                <a href="#pay-electric-bill" className="buydiv">
                  <div className="flex-div">
                    <img src={suffing} alt="suffing"></img>
                    <span>Pay Electric Bill</span>
                  </div>
                  <img src={dropdown} alt="dropdown"></img>
                </a>
              </div>

              <div className="buydiv-container">
                <a href="#airtime-to-cash" className="buydiv">
                  <div className="flex-div">
                    <img src={messagIcon} alt="airtime-to-cash"></img>
                    <span>Airtime to Cash</span>
                  </div>
                </a>
              </div>

              {isAirtimeTrue && (
                  <Network/>
              )}

              <div className="buydiv-container">
                <a href="#transaction-history" className="buydiv">
                  <div className="flex-div">
                    <img src={transIcon} alt="transaction-history"></img>
                    <span>Transaction History</span>
                  </div>
                </a>
              </div>

              <div className="buydiv-container">
                <a href="#help-support" className="buydiv">
                  <div className="flex-div">
                    <img src={headphone} alt="help-support"></img>
                    <span>Help and Support</span>
                  </div>
                </a>
              </div>
          
            </div>
              
            <div className="logout-container   lognow">
              <a href="#logout" className="buydiv">
                <div className="flex-div">
                  <img src={logout} alt="logout"></img>
                  <span>Log Out</span>
                </div>
                <img src={dropdown} alt="dropdown"></img>
              </a>
            </div>
          </div>
        </div>
 
  );
};

export default Sidebar;
