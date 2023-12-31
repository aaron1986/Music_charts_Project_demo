import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: { returnTo: '/home' } 
    });
  };

  return <button onClick={handleLogin}>Log in or Register</button>;
};

export default LoginButton;