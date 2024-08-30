import React from "react";
import "./network.css";
import "./network";
import arrow from '../../Images/forward-arrow.png'
import airtel from "../../Images/Networks (1).png";
import mtn from "../../Images/Networks.png";
import etisalat from "../../Images/etisalat.png"; 

const Network = () => {
  return (
    <div>
      <div className="buydiv-container">
        <a href="#airtime-to-cash" className="buydiv">
          <div className="flex-div">
            <img className="networks" src={mtn} alt="networicon"></img>
            <img className="networks" src={airtel} alt="networicon"></img>
            <img className="networks" src={etisalat} alt="networicon"></img>
            <div className="more">More<img className="more-arrow" src={arrow} alt="more"></img></div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Network;
