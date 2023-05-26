import "./Login.css"

import { useAuth0 } from "@auth0/auth0-react";
import React from "react";


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  
  const handleLogin = () => {
    localStorage.setItem("token", "true");
    loginWithRedirect();
    
  };

  return <button onClick={handleLogin}>Log In</button>;
};

export default LoginButton;