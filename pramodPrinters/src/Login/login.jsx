import React, { useEffect, useState } from "react";
import "./login.css";
import Link from "@mui/material/Link";
import Img from "../assets/33.png";
import { AuthButton } from "../TextField/AuthButton";
import { Textfield } from "../TextField/textField.jsx";
import { ToastContainer, toast } from "react-toastify";
import useAuth from "../context/useAuth.jsx";
import { MainPageBack } from "../HomePages/MainPageBack";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

export function Login() {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [business, setBusiness] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { api, setAuth, auth } = useAuth();
  const navigate = useNavigate();

  const showLoginFormFunc = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = showLoginForm ? `${api}/user/login` : `${api}/user/register`;
      const payload = showLoginForm
        ? { email, password }
        : { email, password, business, fname, lname, phone };

      const res = await axios.post(endpoint, payload);
      console.log(res);
      if (res.data) {
        if (showLoginForm) {
          setAuth({
            ...auth,
            user: res.data.user,
            token: res.data.token,
          });
          toast.success("Login successfully");
          localStorage.setItem("auth", JSON.stringify(res.data));
          navigate("/");
        } else {
          toast.success("Registered successfully. Please login.");
          showLoginFormFunc();
        }
        
      } 
     
    } catch (error) {
      // console.error(error.response.data.message[0]);
      console.log(error);
      toast.error(typeof (error.response.data.message) ==='string'? error.response.data.message:error.response.data.message[0]);
    }
  };

  useEffect(() => {
    // if (auth.token) {
    //   toast.success(`You are already logged in`);
    //   navigate("/");
    // }
  }, [navigate, auth]);

  return (  <>   
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
          <img src={Img} alt="Login" />
          <div className="loginForm">
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", width: "100%" }}>
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
            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <h2>Welcome Back</h2>
              <h4>You have been missed!!</h4>
            </div>
            <div className="loginInput">
              <form id="loginForm" onSubmit={handleSubmit}>
                <Textfield label="Email" variant="outlined" width={"100%"} type={"email"} value={email} name="email" set={setEmail} />
                <Textfield label="Password" variant="outlined" width={"80%"} type={"password"} value={password} name="password" set={setPassword} />
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", width: "90%" }}>
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
                <AuthButton type="submit" text={"Login"} width={"78%"} height={"15%"} />
              </form>
            </div>
          </div>
        </motion.div>
      ) : (
        <div className="registerPageFront">
          <img src={Img} alt="Register" />
          <div className="loginForm">
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", width: "100%" }}>
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
            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <h2>Be Our Valuable Member</h2>
              <h4>Get Your Credentials!!</h4>
            </div>
            <div className="registerInput">
              <form onSubmit={handleSubmit} id="registerForm">
                <Textfield label="Your Business Name" variant="outlined" width={"100%"} type={"text"} value={business} name="business" set={setBusiness} />
                <div className="registerNameDiv">
                  <Textfield label="First Name" variant="outlined" width={"49%"} type={"text"} value={fname} name="fname" set={setFname} />
                  <Textfield label="Last Name" variant="outlined" width={"49%"} type={"text"} value={lname} name="lname" set={setLname} />
                </div>
                <Textfield label="Mobile No." variant="outlined" width={"100%"} type={"number"} value={phone} name="phone" set={setPhone} />
                <Textfield label="Email" variant="outlined" width={"80%"} type={"email"} value={email} name="email" set={setEmail} />
                <Textfield label="Password" variant="outlined" width={"80%"} type={"password"} value={password} name="password" set={setPassword} />
                <AuthButton type="submit" text={"Register"} width={"78%"} height={"12%"} />
              </form>
            </div>
          </div>
        </motion.div>
      )}

    </div>
    </>
  );
}
