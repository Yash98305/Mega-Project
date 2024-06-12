import React from "react";
import "./MainPageCSS.css";
import { Navbar } from "../Navbar/navbar";

export function MainPageBack() {
  return (
    <div className="mainPageBack">
      <Navbar />
      <div className="mainPageBackDiv">
        <div className="navSideBar" id="mainPageSideBar">
          <div className="socialMediaLinkDiv"></div>
        </div>
        <div className="navMidBar"></div>
        <div className="navEndBar"></div>
      </div>
    </div>
  );
}
