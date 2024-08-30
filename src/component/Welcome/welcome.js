import React from "react";
import "./welcome.css";
import usericon from "../../Images/usericon (1).png";
import notificationicon from "../../Images/notificationicon.png";

const Welcome = (props) => {
  return (
    <>
     
        <div className="welcome">
          <div>
            <h3>{props.username}</h3>
          </div>
          <div className="upgrade">
          <a href="##">Upgrade To Merchant</a>
          <img src={notificationicon} alt="dropdown"></img>
          <img src={usericon} alt="dropdown"></img>
        </div>
        </div>

        
   
    </>
  );
};

export default Welcome;
