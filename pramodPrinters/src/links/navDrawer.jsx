import React from "react";
import "./navLink.css";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from "./navLink";

export function NavDrawer() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{ display: "none"}}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          {" "}
          <NavLink
            to="/"
            text="Home"
            fontFamily={"Mukta"}
            color={"rgb(10, 37, 52)"}
            fontSize={"1rem"}
            fontWeight={"800"}
          />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <NavLink
            to="/"
            text="Home"
            fontFamily={"Mukta"}
            color={"rgb(10, 37, 52)"}
            fontSize={"1rem"}
            fontWeight={"800"}
          />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <NavLink
            to="/"
            text="Home"
            fontFamily={"Mukta"}
            color={"rgb(10, 37, 52)"}
            fontSize={"1rem"}
            fontWeight={"800"}
          />
        </MenuItem>
      </Menu>
    </div>
  );
}
