import React from "react";
import "./airtime.css";
import Sidebar from "../Sidebar/sidebar";
import Welcome from "../Welcome/welcome";

const Airtime = () => {
  return (
    <div className="containerr">
      <Sidebar isAirtimeTrue={true} />
      <div className="login-wrapper">
        <div className="welcome-container">
          <Welcome username="Airtime to Cash" />

          <div className="airtime-container">
            <div>
              <a href="##">Fill info</a>
              <a href="##">Make Payment</a>
              <a href="##">View Receipt</a>
            </div>
            <div className="airtime-form-container">
              <form className="airtime-form">
                <h3 className="airtime-header">Airtime to Cash</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="network">Select Network</label>
                    <select id="network" name="network" required>
                      <option value="">-Select-</option>
                      <option value="mtn">MTN</option>
                      <option value="etisalat">Etisalat</option>
                      <option value="airtel">Airtel</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label >Phone Number</label>
                    <input
                      type="text"
                      id="phone-number"
                      name="phone-number"
                      placeholder="09023445823"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Amount</label>
                  <input type="text" placeholder="N5,000" name="amount" required />
                </div>

                <div className="form-group">
                  <label >Airtime Share PIN</label>
                  <input
                    type="text"
                    id="airtime-pin"
                    name="airtime-pin"
                    placeholder="98403"

                    required
                  />
                </div>

                <button type="submit" className="proceed-btn">
                  Proceed
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Airtime;
