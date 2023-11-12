import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: { returnTo: './Charts' } 
    });
  };

  return <h2 onClick={handleLogin}>Log in or Register</h2>;
};

export default LoginButton;