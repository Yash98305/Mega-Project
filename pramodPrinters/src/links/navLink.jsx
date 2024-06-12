import React from "react";
import Link from "@mui/material/Link";
import './navLink.css';

export function NavLink({to,fontFamily,fontWeight,color,fontSize,text}) {
  return (

    <Link
      id="navLink"
      href={to}
      underline="none"
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      color={color}
      fontSize={fontSize}
      style={{
        '&:hover':{color:"rgb(120, 98, 0)"},
      }}
    >
      {text}
    </Link>
  );
}
