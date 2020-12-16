import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function InvestmentPrefences() {
  return (
    <>
      <div id="investmentPrefences">
        <div className="container">
          <div className="row">
            <div className="col-10 offset-1">
              <div className="row">
                <div className="steps col-4">Step 2 of 3</div>
                <div className="details col-5">Lost or have trouble?</div>
                <Link className="help col" to="">
                  Get help &#8594;
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-8 offset-1">
              <h1>Investment preferences</h1>
              <div className="details">
                This will help us figure out what your investment options are so
                that we can show you only possibly intresting for you deals
              </div>
              <h3 className="header2">
                What kind of real estate are you interested in?
              </h3>
              <div className="boxes">
                <div className="row">
                  <div className="col-md-4 col-lg-3">
                    <span>
                      <input
                        id="Check1"
                        name="Checks"
                        type="checkbox"
                      />
                      <label for="Check1">Single family</label>
                    </span>
                  </div>
                  <div className="col-md-4 col-lg-3">
                    <span>
                      <input
                        id="Check2"
                        name="Checks"
                        type="checkbox"
                      />
                      <label for="Check2">Residential multifamily</label>
                    </span>
                  </div>
                  <div className="col-md-4 col-lg-3">
                    <span>
                      <input
                        id="Check3"
                        name="Checks"
                        type="checkbox"
                      />
                      <label for="Check3">Commercial retail</label>
                    </span>
                  </div>
                  <div className="col-md-4 col-lg-3">
                    <span>
                      <input
                        id="Check4"
                        name="Checks"
                        type="checkbox"
                      />
                      <label for="Check4">Commercial industrial</label>
                    </span>
                  </div>
                  <div className="col-md-4 col-lg-3">
                    <span>
                      <input
                        id="Check5"
                        name="Checks"
                        type="checkbox"
                      
                      />
                      <label for="Check5">Commercial hospitality</label>
                    </span>
                  </div>
                  <div className="col-md-4 col-lg-3">
                    <span>
                      <input
                        id="Check6"
                        name="Checks"
                        type="checkbox"
                      
                      />
                      <label for="Check6">Commercial warehousing</label>
                    </span>
                  </div>
                  <div className="col-md-4 col-lg-3">
                    <span>
                      <input
                        id="Check7"
                        name="Checks"
                        type="checkbox"
                       
                      />
                      <label for="Check7">Commercial office</label>
                    </span>
                  </div>
                  <div className="col-md-4 col-lg-3">
                    <span>
                      <input
                        id="Check8"
                        name="Checks"
                        type="checkbox"
                        value="Item 2"
                      />
                      <label for="Check8">Other</label>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="offset-3"></div>
            <div className="footer col-10 offset-1">
              <div className="row">
                <Link
                  className="help back-to-home col"
                  to="/user-onboarding/plans"
                >
                  &larr;Back to the homepage
                </Link>
                <Button className="skip-btn col-3">Skip for now &#8594;</Button>
                <Link to="/user-onboarding/prefences" className="col-3">
                  {" "}
                  <Button className="next-step-btn">Finish</Button>{" "}
                </Link>
              </div>
            </div>
            <div className="offset-1"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default InvestmentPrefences;
