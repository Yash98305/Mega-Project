import React from "react";
import "./MainPageCSS.css";
import { Navbar } from "../Navbar/navbar";
import { motion } from "framer-motion";

export function MainPageBack() {
  return (
    <div className="mainPageBack">
      <Navbar />
      <div className="mainPageBackDiv">
        <div className="navSideBar" id="mainPageSideBar">
          <motion.div
            className="socialMediaLinkDiv"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          ></motion.div>
        </div>
        <div className="navMidBar"></div>
        <div className="navEndBar"></div>
      </div>
    </div>
  );
}
