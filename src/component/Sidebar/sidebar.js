import React from "react";
import "./sidebar.css";
import logo from "../../Images/logo (2).png";
import dashboard from "../../Images/dashboard-icon.png";
 
import Network from "../Network/network";
import {  FaChevronDown, FaWifi, FaSignOutAlt, FaHeadset, FaPhone, FaBook,  FaTv, FaBolt, FaSync } from 'react-icons/fa';

const Sidebar = ({ isAirtimeTrue }) => {
  return (
    <div className="login-sidebar">
      <div className="login-div">
        <div className="subssum-div">
          <img src={logo} alt="logo" /> <span>subssum</span>
        </div>
        <div className="dashboard-div">
          <a href="#dashboard" className="dashbtn-div">
            <img src={dashboard} alt="dashboard" /> <span>Dashboard</span>
          </a>

          <div className="buydiv-container">
            <a href="#buy-airtime" className="buydiv">
              <div className="flex-div">
                <FaPhone style={{ transform: 'rotate(90deg)' }} /> <span>Buy Airtime</span>
              </div>
              <FaChevronDown />
            </a>
          </div>

          <div className="buydiv-container">
            <a href="#buy-data" className="buydiv">
              <div className="flex-div">
                <FaWifi /> <span>Buy Data</span>
              </div>
              <FaChevronDown />
            </a>
          </div>

          <div className="buydiv-container">
            <a href="#tv-subscription" className="buydiv">
              <div className="flex-div">
                <FaTv /> <span>Tv Subscription</span>
              </div>
              <FaChevronDown />
            </a>
          </div>

          <div className="buydiv-container">
            <a href="#pay-electric-bill" className="buydiv">
              <div className="flex-div">
                <FaBolt /> <span>Pay Electric Bill</span>
              </div>
              <FaChevronDown />
            </a>
          </div>

          <div className="buydiv-container">
            <a href="#airtime-to-cash" className="buydiv">
              <div className="flex-div">
              <FaSync />
                <span>Airtime to Cash</span>
              </div>
              <FaChevronDown />
            </a>
          </div>

          {isAirtimeTrue && <Network />}

          <div className="buydiv-container">
            <a href="#transaction-history" className="buydiv">
              <div className="flex-div">
                <FaBook /> <span>Transaction History</span>
              </div>
            </a>
          </div>

          <div className="buydiv-container">
            <a href="#help-support" className="buydiv">
              <div className="flex-div">
                <FaHeadset /> <span>Help and Support</span>
              </div>
            </a>
          </div>
        </div>

        <div className="logout-container lognow">
          <a href="#logout" className="buydiv">
            <div className="flex-div">
              <FaSignOutAlt /> <span>Log Out</span>
            </div>
            <FaChevronDown />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
