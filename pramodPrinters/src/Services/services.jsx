import React from "react";
import "./services.css";
import Img1 from "../assets/Img1.jpg";

export function Services() {
  return (
    <div className="serviceMain">
      <div className="serviceHeadDiv">OUR SERVICES</div>
      <div className="servicesDataDiv">
        <div className="helpAddDiv">
          <div className="helpAddDataDiv">
            <h2>ALWAYS READY TO HELP PRINTERS & ADVERTISERS</h2>
            <h4>
              Unity empowers us. We can work alone, but together we will win.
              Unity is strength, where there is team work and collaborations,
              wonderfull things can be achieved.
            </h4>
          </div>
          <img src={Img1} alt="" id="helpAddImg" />
        </div>
        <div className="servcesDiv">
          <h2>WIDE RANGE OF PRINTING SERVICES</h2>
          <div className="services"></div>
        </div>
      </div>
    </div>
  );
}
