import React from "react";
import "./home.css";
import {Services} from "../Services/services";
import { MainPageBack} from "../HomePages/MainPageBack";
import { Navbar } from "../Navbar/navbar";
import { MainPageFront } from "../HomePages/MainPageFront";

export function Home() {
  return (
    <div className="scrollMain">
      <div className="mainPage">
        <MainPageBack/>
        <MainPageFront/>
      </div>
      <Services/>
    </div>
  );
}
