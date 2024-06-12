import React from "react";
import { NavLink } from "../links/navLink";
import "./navbar.css";
import { NavDrawer } from "../links/navDrawer";
import { Services } from "../Services/services";


export function Navbar() {
  return (
    <div className="navMain">
      <div className="navSideBar">
        <h2>🟠Neelam Graphics</h2>
      </div>
      <div className="navMidBar"></div>
      <div className="navEndBar">
        <NavLink to="/" text="Home" fontFamily={"Mukta"} color={"rgb(10, 37, 52)"} fontSize={"1rem"} fontWeight={"800"}/>
        <NavLink to={<Services/>} text="Our Services" fontFamily={"Mukta"} color={"rgb(10, 37, 52)"} fontSize={"1rem"} fontWeight={"800"}/>
        <NavLink to="/" text="Products" fontFamily={"Mukta"} color={"rgb(10, 37, 52)"} fontSize={"1rem"} fontWeight={"800"}/>
        <NavLink to="/login" text="Member" fontFamily={"Mukta"} color={"rgb(10, 37, 52)"} fontSize={"1rem"} fontWeight={"800"}/>
        <NavDrawer />
      </div>
    </div>
  );
}
