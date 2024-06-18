import React from "react";
import "./login.css";
import Link from "@mui/material/Link";
import Img from "../assets/33.png";
import { AuthButton } from "../TextField/AuthButton";
import { Textfield } from "../TextField/textField";
import Checkbox from "@mui/material/Checkbox";
import { MainPageBack } from "../HomePages/MainPageBack";
import { motion } from "framer-motion";

export function Login() {
  const [showLoginForm, setShowLoginForm] = React.useState(true);

  const showLoginFormFunc = () => {
    setShowLoginForm(!showLoginForm);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="loginMainPage">
      <MainPageBack />
      {showLoginForm ? (
        <motion.div
          className="loginPageFront"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img src={Img} alt="" />
          <div className="loginForm">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <h3>
                Not a Member?
                <Link
                  onClick={showLoginFormFunc}
                  sx={{
                    textDecoration: "none",
                    fontFamily: "Mukta",
                    fontWeight: "600",
                    color: "rgb(149, 204, 241)",
                    "&:hover": {
                      color: "rgb(255, 209, 0)",
                      cursor: "pointer",
                    },
                  }}
                >
                  {" Register Here"}
                </Link>
              </h3>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2>Welcome Back</h2>
              <h4>You have been missed!!</h4>
            </div>
            <div className="loginInput">
              <form action="" id="loginForm">
                <Textfield
                  label="Email"
                  variant="outlined"
                  width={"100%"}
                  type={"email"}
                />
                <Textfield
                  label="Password"
                  variant="outlined"
                  width={"80%"}
                  type={"password"}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    width: "90%",
                  }}
                >
                  <Link
                    href="#"
                    sx={{
                      textDecoration: "none",
                      fontFamily: "Mukta",
                      fontWeight: "600",
                      color: "rgb(149, 204, 241)",
                      "&:hover": {
                        color: "rgb(255, 209, 0)",
                        cursor: "pointer",
                      },
                    }}
                  >
                    {" Recover Password"}
                  </Link>
                </div>
                <AuthButton text={"Login"} width={"78%"} height={"15%"} />
              </form>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="registerPageFront"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img src={Img} alt="" />
          <div className="loginForm">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <h3>
                Member?
                <Link
                  onClick={showLoginFormFunc}
                  sx={{
                    textDecoration: "none",
                    fontFamily: "Mukta",
                    fontWeight: "600",
                    color: "rgb(149, 204, 241)",
                    "&:hover": {
                      color: "rgb(255, 209, 0)",
                      cursor: "pointer",
                    },
                  }}
                >
                  {" Login Here"}
                </Link>
              </h3>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2>Be Our Valuable Member</h2>
              <h4>Get Your Credentials!!</h4>
            </div>
            <div className="registerInput">
              <form action="" id="registerForm">
                <Textfield
                  label="Your Bussiness Name"
                  variant="outlined"
                  width={"100%"}
                  type={"text"}
                />
                <div className="registerNameDiv">
                  <Textfield
                    label="First Name"
                    variant="outlined"
                    width={"49%"}
                    type={"text"}
                  />
                  <Textfield
                    label="Last Name"
                    variant="outlined"
                    width={"49%"}
                    type={"text"}
                  />
                </div>
                <Textfield
                  label="Mobile No."
                  variant="outlined"
                  width={"100%"}
                  type={"number"}
                />
                <Textfield
                  label="Email"
                  variant="outlined"
                  width={"80%"}
                  type={"email"}
                />
                <Textfield
                  label="Password"
                  variant="outlined"
                  width={"80%"}
                  type={"password"}
                />
                <AuthButton text={"Register"} width={"78%"} height={"12%"} />
              </form>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
