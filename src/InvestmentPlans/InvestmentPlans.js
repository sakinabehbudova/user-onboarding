import { render } from "@testing-library/react";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom' ; 


function InvestmentPlans() {

  document.addEventListener("DOMContentLoaded", function (event) {
   
   
  event.preventDefault();
    setTimeout(
      init2slider("id66", "id66b", "id661", "id662", "id66i1", "id66i2"),0
    );

    function init2slider(idX, btwX, btn1X, btn2X, input1, input2) {
      var slider = document.getElementById(idX);
      var between = document.getElementById(btwX);
      var button1 = document.getElementById(btn1X);
      var button2 = document.getElementById(btn2X);
      let inpt1 = document.getElementById(input1);
      var inpt2 = document.getElementById(input2);

             var min=inpt1.min;
  					var max=inpt1.max;

      /*init*/
      var sliderCoords = getCoords(slider);
      button1.style.marginLeft = "0px";
      button2.style.marginLeft =
        slider.offsetWidth - button1.offsetWidth + "px";
      between.style.width = slider.offsetWidth - button1.offsetWidth + "px";
      inpt1.value = min;
      inpt2.value = max;

      inpt1.onchange = function (evt) {
        if (parseInt(inpt1.value) < min) inpt1.value = min;
        if (parseInt(inpt1.value) > max) inpt1.value = max;
        if (parseInt(inpt1.value) > parseInt(inpt2.value)) {
          var temp = inpt1.value;
          inpt1.value = inpt2.value;
          inpt2.value = temp;
        }

        var sliderCoords = getCoords(slider);
        var per1 = (parseInt(inpt1.value - min) * 100) / (max - min);
        var per2 = (parseInt(inpt2.value - min) * 100) / (max - min);
        var left1 = (per1 * (slider.offsetWidth - button1.offsetWidth)) / 100;
        var left2 = (per2 * (slider.offsetWidth - button1.offsetWidth)) / 100;

        button1.style.marginLeft = left1 + "px";
        button2.style.marginLeft = left2 + "px";

        if (left1 > left2) {
          between.style.width = left1 - left2 + "px";
          between.style.marginLeft = left2 + "px";
        } else {
          between.style.width = left2 - left1 + "px";
          between.style.marginLeft = left1 + "px";
        }
      };
      inpt2.onchange = function (evt) {
        if (parseInt(inpt2.value) < min) inpt2.value = min;
        if (parseInt(inpt2.value) > max) inpt2.value = max;
        if (parseInt(inpt1.value) > parseInt(inpt2.value)) {
          var temp = inpt1.value;
          inpt1.value = inpt2.value;
          inpt2.value = temp;
        }

        var sliderCoords = getCoords(slider);
        var per1 = (parseInt(inpt1.value - min) * 100) / (max - min);
        var per2 = (parseInt(inpt2.value - min) * 100) / (max - min);
        var left1 = (per1 * (slider.offsetWidth - button1.offsetWidth)) / 100;
        var left2 = (per2 * (slider.offsetWidth - button1.offsetWidth)) / 100;

        button1.style.marginLeft = left1 + "px";
        button2.style.marginLeft = left2 + "px";

        if (left1 > left2) {
          between.style.width = left1 - left2 + "px";
          between.style.marginLeft = left2 + "px";
        } else {
          between.style.width = left2 - left1 + "px";
          between.style.marginLeft = left1 + "px";
        }
      };

      /*mouse*/
      button1.onmousedown = function (evt) {
        var sliderCoords = getCoords(slider);
        var betweenCoords = getCoords(between);
        var buttonCoords1 = getCoords(button1);
        var buttonCoords2 = getCoords(button2);
        var shiftX2 = evt.pageX - buttonCoords2.left;
        var shiftX1 = evt.pageX - buttonCoords1.left;

        document.onmousemove = function (evt) {
          var left1 = evt.pageX - shiftX1 - sliderCoords.left;
          var right1 = slider.offsetWidth - button1.offsetWidth;
          if (left1 < 0) left1 = 0;
          if (left1 > right1) left1 = right1;
          button1.style.marginLeft = left1 + "px";

          shiftX2 = evt.pageX - buttonCoords2.left;
          var left2 = evt.pageX - shiftX2 - sliderCoords.left;
          var right2 = slider.offsetWidth - button2.offsetWidth;
          if (left2 < 0) left2 = 0;
          if (left2 > right2) left2 = right2;

          var per_min = 0;
          var per_max = 0;
          if (left1 > left2) {
            between.style.width = left1 - left2 + "px";
            between.style.marginLeft = left2 + "px";

            per_min =
              (left2 * 100) / (slider.offsetWidth - button1.offsetWidth);
            per_max =
              (left1 * 100) / (slider.offsetWidth - button1.offsetWidth);
          } else {
            between.style.width = left2 - left1 + "px";
            between.style.marginLeft = left1 + "px";

            per_min =
              (left1 * 100) / (slider.offsetWidth - button1.offsetWidth);
            per_max =
              (left2 * 100) / (slider.offsetWidth - button1.offsetWidth);
          }
          inpt1.value =
            parseInt(min) + Math.round(((max - min) * per_min) / 100);
          inpt2.value =
            parseInt(min) + Math.round(((max - min) * per_max) / 100);
        };
        document.onmouseup = function () {
          document.onmousemove = document.onmouseup = null;
        };
        return false;
      };

      button2.onmousedown = function (evt) {
        var sliderCoords = getCoords(slider);
        var betweenCoords = getCoords(between);
        var buttonCoords1 = getCoords(button1);
        var buttonCoords2 = getCoords(button2);
        var shiftX2 = evt.pageX - buttonCoords2.left;
        var shiftX1 = evt.pageX - buttonCoords1.left;

        document.onmousemove = function (evt) {
          var left2 = evt.pageX - shiftX2 - sliderCoords.left;
          var right2 = slider.offsetWidth - button2.offsetWidth;
          if (left2 < 0) left2 = 0;
          if (left2 > right2) left2 = right2;
          button2.style.marginLeft = left2 + "px";

          shiftX1 = evt.pageX - buttonCoords1.left;
          var left1 = evt.pageX - shiftX1 - sliderCoords.left;
          var right1 = slider.offsetWidth - button1.offsetWidth;
          if (left1 < 0) left1 = 0;
          if (left1 > right1) left1 = right1;

          var per_min = 0;
          var per_max = 0;

          if (left1 > left2) {
            between.style.width = left1 - left2 + "px";
            between.style.marginLeft = left2 + "px";
            per_min =
              (left2 * 100) / (slider.offsetWidth - button1.offsetWidth);
            per_max =
              (left1 * 100) / (slider.offsetWidth - button1.offsetWidth);
          } else {
            between.style.width = left2 - left1 + "px";
            between.style.marginLeft = left1 + "px";
            per_min =
              (left1 * 100) / (slider.offsetWidth - button1.offsetWidth);
            per_max =
              (left2 * 100) / (slider.offsetWidth - button1.offsetWidth);
          }
          inpt1.value =
            parseInt(min) + Math.round(((max - min) * per_min) / 100);
          inpt2.value =
            parseInt(min) + Math.round(((max - min) * per_max) / 100);
        };
        document.onmouseup = function () {
          document.onmousemove = document.onmouseup = null;
        };
        return false;
      };

      button1.ondragstart = function () {
        return false;
      };
      button2.ondragstart = function () {
        return false;
      };

      function getCoords(elem) {
       
        var box = elem.getBoundingClientRect();
        return {
          top: box.top + window.pageYOffset,
          left: box.left + window.pageXOffset,
        };
      }
    }
  },false);

  return (
    <>
      <div id="investmentPlans">
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
              <h1>Investment plans</h1>
              <div className="details">
                Let us know about your investment plans. This will help us get
                you to the right expert who will help you further
              </div>

              <h3 className="header2">
                How much are you planning to invest in this year?
              </h3>

              <div className="number-range">
                <div id="id66" className="range">
                  <div id="id66b" className="range__between"></div>
                  <button id="id661" className="range__button_1"></button>
                  <button id="id662" className="range__button_2"></button>
                  <div className="row">
                    <div className="col-6">
                      <div>
                        {" "}
                        <input
                          id="id66i1"
                          className="range_inpt1"
                          type="number"
                          min="100"
                          max="10000"
                          
                         
                        />
                        <label>From</label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div>
                        <input
                          id="id66i2"
                          className="range_inpt2"
                          type="number"
                          min="100"
                          max="10000"
                        
                        />
                        <label>To</label>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>

              <h3 className="header2">Are you an accredited investor?</h3>

              <div className="buttons">
                <span>
                  <input
                    id="Radio1"
                    name="Radios"
                    type="radio"
                    value="Option 1"
                    defaultChecked
                  />
                  <label htmlFor="Radio1">Yes</label>
                </span>

                <span>
                  <input
                    id="Radio2"
                    name="Radios"
                    type="radio"
                    value="Option 2"
                  />
                  <label htmlFor="Radio2">No</label>
                </span>
              </div>
            </div>
            <div className="offset-3"></div>
            <div className="footer col-10 offset-1">
              <div className="row">
                <Link className="help back-to-home col" to="/user-onboarding">
                  &larr;Back to the homepage
                </Link>
                <Button className="skip-btn col-3">Skip for now &#8594;</Button>
                <Link to="/user-onboarding/prefences" className="col-3">
                  {" "}
                  <Button className="next-step-btn">Next step</Button>{" "}
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
export default InvestmentPlans;
