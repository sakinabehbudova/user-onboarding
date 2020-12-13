import React from "react";
import { Steps } from "antd";

function Sidebar() {
  const { Step } = Steps;

  return (
    <div>
      <div id="sidebar">
        <div className="container">
          <div className="row">
          <div className="col-10 offset-1">

          

          <div className="row pl-3">
            <h3 className="united">United</h3>
            <h3 className="properties">Properties</h3>
          </div>
          <Steps id="steps" direction="vertical" size="middle" current={0}>
            <Step title="Contact details" description="" />
            <Step title="Investment plans" description="" />
            <Step title="Investment preferences" description="" />
          </Steps>
          <div>
              <div className="box">
            <i className="text">
              We care about your time, that's why we created a 3-stage
              onboarding that will not take more than 5 minutes to complete
            </i>
            <div className="author">William Mac</div>
            <div className="row">
            <div className="details">CO-FOUNDER, INVESTOR</div>
            <h4 className="up-icon1">U</h4>
            <h4 className="up-icon2">P</h4>
            </div>
            </div>
          </div>

            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
export default Sidebar;
