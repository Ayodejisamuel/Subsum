import React from "react";
import "./dashbboard.css";
import edit from "../../Images/edit (1).png";
import copy from "../../Images/copy.png";
import share from "../../Images/share.png";
import cashout from "../../Images/cashout.png";
import creditcard from "../../Images/Credit Card 1.png";
import notificationIcon from '../../Images/notificationicon.png'
import userIcon from '../../Images/usericon (1).png';
import Welcome from "../Welcome/welcome";
import Sidebar from "../Sidebar/sidebar";

const Dashbboard = () => {
  return (
    <div className="containerr">
      <Sidebar />
      <div className="login-wrapper">
       

        <div className="welcome-container">
          <Welcome 
          notificationIcon={notificationIcon} 
        userIcon={userIcon}
          showUpgrade={true}  
          username="Welcome, Lawal Wahab" />
          <div className="cards-div">
            <div className="wallet-div">
              <div className="wallet-balance">
                <div>
                  <p>Wallet Balance</p>
                  <h2>₦3000</h2>
                </div>
                <div>
                  <button>Fund wallet</button>
                </div>
              </div>
              <div className="refferal-div">
                <div>
                  <p>Referral</p>
                  <p>
                    Referral Code: <span>18/52ha089</span>
                  </p>
                </div>
                <div className="copy-div">
                  <a href="ww">
                    <div className="referal-icon-div">
                      <img src={copy} alt=""></img>Copy
                    </div>
                  </a>
                  <a href="ww">
                    <div className="referal-icon-div">
                      <img src={edit} alt=""></img>Edit
                    </div>
                  </a>
                  <a href="ww">
                    <div className="referal-icon-div">
                      <img src={share} alt="share"></img>Share
                    </div>
                  </a>
                </div>
              </div>
              <div className="current-balance">
                <div className="current-balance-div">
                  <div className="total-div">
                    <p>Total referrals made</p>
                    <h3>0</h3>
                  </div>
                  <div className="total-div">
                    <p>Current wallet Bonus</p>
                    <h3>₦0.00</h3>
                  </div>
                </div>
                <a href="ww">
              
                  <div className="cashout">
                    <img className="cashimg" alt="cashout" src={cashout}></img>
                    <span>Cashout</span>
                  </div>{" "}
                </a>
              </div>
            </div>
            <div className="credit-card-div">
              <div className="cards-details">
                <div className="card">Cards</div>
                <div>
                  <h4 className="card-desc">You Have No Saved Cards</h4>
                </div>
              </div>
              <img
                src={creditcard}
                className="credit-cards"
                alt="credit-card"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbboard;;
