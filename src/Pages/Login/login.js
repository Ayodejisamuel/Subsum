import React from "react";
import "./login.css";
import Welcome from "../../component/Welcome/welcome";
import Button from "../../component/Button/button";
import section from '../../Images/left-section2.jpg'

const Login = () => {
  return (
    <div className="containerr">
      <div className="login-sidebar-div">
 
          <img className="sectionimg" src={section} alt="logo" />
  
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
