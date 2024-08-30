import React from "react";
import "./login.css";
import Welcome from "../Welcome/welcome";
import Button from "../Button/button";
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
 

const Login = () => {
  return (
    <div className="containerr">
      <div className="login-sidebar-div">
      <div className="login-sidebar sidebarr">
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
 
      </div>

      <div className="login-wrapper">
        <div className="welcome-container">
          <Welcome
            username="Home"
            showUpgrade={false}
            buttonText="Sign In"
            notificationIcon={null}
            userIcon={null}
          />

          <div className="loginn-div">
            <h3>Login</h3>

            <div className="form-wrapperr">
              <div className="googlediv">
                <img
                  alt="google"
                  src="https://www.gstatic.com/images/branding/product/2x/googleg_32dp.png"
                />{" "}
                <span>Login with Google</span>
              </div>
              <div className="continue-with-div">
                <span className="line"></span>
                <span>Or continue with</span>
                <span className="line"></span>
              </div>
              <form className="login-form-container">
                <div className="form-group ">
                  <label for="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="wabdotmail@gmail.com"
                    required
                  />
                </div>

                <div className="form-group password">
                  <label for="email">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                  />
                </div>

                <div className="remember">
                  <div>Remember me</div>
                  <a href="##">Recover password</a>
                </div>
                <div className="login-btn-div">
                <Button name="Log in" />
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
