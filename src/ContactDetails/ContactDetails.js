import React from "react";
import { Button, Form, Link } from "react-bootstrap";

function ContactDetails() {
  /* var input = document.querySelector("input"),
    
    result = document.querySelector("#result");

var iti = intlTelInput(input, {
  initialCountry: ""
}); */

  return (
    <>
      <div id="contactDetails">
        <div className="container">
          <div className="row">
            <div className="col-10 offset-1">
              <div className="row">
                <div className="steps col-4">Step 1 of 3</div>
                <div className="details col-5">Lost or have trouble?</div>
                <a className="help col" to="">
                  Get help &#8594;
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-8 offset-1">
              <h1>Contact Details</h1>
              <div className="details">
                Welcome to United Properties, we are glad to see you! Let’s get
                started by letting us know a little bit about you
              </div>
              <div className="box3">
                <Form>
                  <div className="row">
                    <div className="col-6">
                      <div>
                        <input type="text" name="" required />
                        <label>Full Name</label>
                      </div>
                    </div>
                    <div className="col-6">
                      <input type="tel" />
                      <p id="result"></p>
                    </div>
                  </div>
                  <div>
                    <input type="email" name="" required />
                    <label>E-mail Adress</label>
                  </div>
                  <div>
                    <select>
                      <option value="" disabled selected hidden>
                        Select a Country
                      </option>
                      <option>Azerbaijan</option>
                      <option value="AF">Turkey</option>
                      <option value="AX">Aland Islands</option>
                      <option value="AL">Albania</option>
                      <option value="DZ">Algeria</option>
                      <option value="AS">American Samoa</option>
                    </select>
                  </div>
                </Form>
              </div>
              <h3>Privacy policy</h3>
              <div className="details2">
                We know you care about how your personal information is used and
                shared, so we take your privacy seriously
              </div>
              <a className="help" to="">
                Expand privacy policy &#8594;
              </a>
            </div>
            <div className="offset-3"></div>
            <div className="footer col-10 offset-1">
              <div className="row">
                <a className="help back-to-home col" to="">
                  &larr;Back to the homepage
                </a>
                <Button className="skip-btn col-3">Skip for now &#8594;</Button>
                <Button className="next-step-btn col-3">Next step</Button>
              </div>
            </div>
            <div className="offset-1"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ContactDetails;
