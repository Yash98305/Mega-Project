import { useState, useEffect, useContext, createContext, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);
const api = "http://localhost:8000/api/v1"
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });
 
  //default axios
  axios.defaults.headers.common["Authorization"] = auth?.token;

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token,
      });
    }

    //eslint-disable-next-line
  }, []);


  return (
    <AuthContext.Provider
      value={{
        api,
        auth,
        setAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
const useAuth = () => useContext(AuthContext);
export default useAuth;
export { AuthProvider};
