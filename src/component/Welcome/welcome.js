 import React from "react";
 import "./welcome.css"; 

const Welcome = (props) => {
  return (
    <>
        <div className="welcome">
          <div>
            <h3 className="linkup">{props.username}</h3> 
          </div>
          <div className="upgrade">
        {props.showUpgrade ? (
          <>
            <a href="##">Upgrade To Merchant</a>
            <img src={props.notificationIcon} alt="notification" />
            <img src={props.userIcon} alt="user" />
          </>
        ) : (
          <button>{props.buttonText}</button>
        )}
      </div>
        </div>
    </>
  );
};

export default Welcome;
