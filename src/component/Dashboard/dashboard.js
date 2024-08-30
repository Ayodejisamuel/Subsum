import React from "react";
import "./dashboard.css";
import Sidebar from "../Sidebar/sidebar";
import Welcome from "../Welcome/welcome";
import photo from "../../Images/photo.png";
import copy from "../../Images/copy.png";
import avatar from "../../Images/avatar.png";
import notificationIcon from '../../Images/notificationicon.png'
import userIcon from '../../Images/usericon (1).png';

const Dashboard = () => {
  return (
    <div className="containerr">
      <Sidebar />
      <div className="welcome-container">
        <Welcome 
        notificationIcon={notificationIcon} 
        userIcon={userIcon}
        showUpgrade={true}  
         username="Welcome, Lawal Wahab "/>

        <div className="welcome-wrapper">
          <div className="upload-container">
            <div className="upload-div">
              <div>
                <img src={avatar} alt="avatarImg"></img>
              </div>
              <div className="upload-details">
                <img src={photo} alt="photoimg"></img>
                <span>Upload Image</span>
              </div>
            </div>
            <div className="user-details-wrapper">
              <div className="user-details-div">
                <div className="details">
                  <span>Name</span>
                  <h5>Lawal Waheed Babatunde</h5>
                </div>
                <div className="details">
                  <span>Email</span>
                  <h5>wabdotmail@gmail.com</h5>
                </div>
                <div className="details">
                  <span>Phone Number</span>
                  <h5>0906 856 2949</h5>
                </div>
                <div className="details">
                  <span>Account Status</span>
                  <h5 className="active">Active</h5>
                </div>

                <div className="details">
                  <span>Referral link</span>
                  <h5>
                    www.subsum.com/tre/wd...<img alt="copy" src={copy}></img>
                    Copy
                  </h5>
                </div>
                <h5 className="edit-details">Edit Details</h5>
              </div>
            </div>
          </div>

          <div className="dashboard-form">
            <div className="button-container">
              <div className="button-div">
                <button className="form-btn" type="submit">
                  Change Password
                </button>
                <button className="form-btnn" type="submit">
                  Change PIN
                </button>
              </div>

              <div className="form-containerr-div">
                <div className="form-inner-wrapper">
                <form>
                  <label for="current-password">Current Password</label>
                  <input
                    type="password"
                    id="current-password"
                    name="current-password"
                    placeholder="Enter current password"
                    required
                  ></input>

                  <label for="new-password">New Password</label>
                  <input
                    type="password"
                    id="new-password"
                    name="new-password"
                    placeholder="Enter new password"
                    required
                  ></input>

                  <label for="confirm-password">Confirm Password</label>
                  <input
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                    placeholder="Confirm new password"
                    required
                  ></input>

                  <button className="submit-btn" type="submit">Submit</button>
                </form>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
