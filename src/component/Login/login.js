import React from "react";
import "./login.css";
import Welcome from "../Welcome/welcome";
import Sidebar from "../Sidebar/sidebar";

const Login = () => {
  return (
    <div className="containerr">
      <Sidebar isAirtimeTrue={true} />
      <div className="login-wrapper">
        <div className="welcome-container">
          <Welcome username="Airtime to Cash" />
        </div>
      </div>
    </div>
  );
};

export default Login;
