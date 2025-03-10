import React from "react";
import "./network.css";
import arrow from '../../Images/forward-arrow.png';
 

const Network = (props) => {
  return (
    <div>
      <div className="buydiv-container">
        <a href="#airtime-to-cash" className="buydiv">
          <div className="flex-div">
            <img className="networks" src={props.mtn} alt="network-icon"></img>
            <img className="networks" src={props.airtel} alt="network-icon"></img>
            <img className="networks" src={props.etisalat} alt="network-icon"></img>
            <div className="more">More<img className="more-arrow" src={arrow} alt="more"></img></div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Network;
