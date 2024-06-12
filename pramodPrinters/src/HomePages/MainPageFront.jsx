import React from "react";
import "./MainPageCSS.css";
import SideImg from "../assets/SideImg.jpg";

export function MainPageFront() {
  return (
    <div className="mainPageFront">
      <div className="CompanyInfo">
        <div className="CompanySalutation">
          <h3>Welcome to</h3>
          <h1>PRAMOD PRINTERS</h1>
          <h2>GROUP OF COMPANIES</h2>
        </div>
        <div className="CompanyBranches">
          <h2>NEELAM GRAPHICS</h2>
          <h2>PRAMOD PRAKASHAN</h2>
        </div>
        <h4>Simple Shape and Your Ideas with Us !!</h4>
      </div>
      <div className="FrontImg">
            <img src={SideImg} alt="Img" />
          </div>
    </div>
  );
}
