import React from "react";
import "./MainPageCSS.css";
import SideImg from "../assets/SideImg.jpg";
import { motion } from "framer-motion";

export function MainPageFront() {
  return (
    <div className="mainPageFront">
      <motion.div
        className="CompanyInfo"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.6,
          delay: 0.5,
          ease: "backInOut",
        }}
      >
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
      </motion.div>
      <motion.div
        className="FrontImg"
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        <img src={SideImg} alt="Img" />
      </motion.div>
    </div>
  );
}
