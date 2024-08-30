import React from "react";
import "./support.css";
import Sidebar from "../Sidebar/sidebar";
import Welcome from "../Welcome/welcome";
import whatsapp from "../../Images/whatsapp.png";
import forwardarrow from "../../Images/arrowforward.png";
import snapchat from "../../Images/snapchat.png";
import staricons from '../../Images/staricon.png';
import questions from "../../Images/question.png";
import powericon from '../../Images/powericon.png';
import phonering from "../../Images/phonering.png";

const Support = () => {
  return (
    <div className="containerr">
      <Sidebar />
      <div className="login-wrapper">
        <div className="welcome-container">
          <Welcome username="Help and Support" />

          <div className="support-container">
            <div className="support-div-wrapper">
              <div className="support-div">
                <div className="icon-div">
                  <img src={questions} alt="faq" />
                </div>
                <div className="frequently">
                  <p>Frequently Asked Questions</p>
                  <div className="imgfaq">
                    <a href="##"><h3>See FAQ</h3></a>
                    <img src={forwardarrow} alt="faqq"></img>
                  </div>
                </div>
              </div>
              <div className="support-div">
                <div className="icon-div">
                  <img src={whatsapp} alt="faq" />
                </div>
                <div className="frequently">
                  <p>Whatsapp</p>
                  <div className="imgfaq">
                    <h3>Drop a Message</h3>
                    <img src={forwardarrow} alt="faqq"></img>
                  </div>
                </div>
              </div>
              <div className="support-div  last">
                <div className="icon-div">
                  <img src={powericon} alt="faq" />
                </div>
                <div className="frequently">
                  <p>Report Our Support</p>
                  <div className="imgfaq">
                    <h3>Not Satisfied?</h3>
                    <img src={forwardarrow} alt="faqq"></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="support-div-wrapper">
            <div className="support-div">
                <div className="icon-div">
                  <img src={snapchat} alt="faq" />
                </div>
                <div className="frequently">
                  <p>Live Chat</p>
                  <div className="imgfaq">
                    <h3>Chat Now</h3>
                    <img src={forwardarrow} alt="faqq"></img>
                  </div>
                </div>
              </div>
              <div className="support-div">
                <div className="icon-div">
                  <img src={phonering} alt="faq" />
                </div>
                <div className="frequently">
                  <p>Phone Call</p>
                  <div className="imgfaq">
                    <h3>Call Us</h3>
                    <img src={forwardarrow} alt="faqq"></img>
                  </div>
                </div>
              </div>
              <div className="support-div last">
                <div className="icon-div">
                  <img src={staricons} alt="faq" />
                </div>
                <div className="frequently">
                  <p>Review  Our App</p>
                  <div className="imgfaq">
                    <a href="#coming-soon"><div>Coming soon</div></a>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
