import React, { useContext }  from "react";

import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

import { AuthContext } from "../../shared/context/auth-context";

const LoginPage = () => {
  const auth = useContext(AuthContext);
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GCP_CLIENT}>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
          auth.login(credentialResponse.credential, credentialResponse.credential);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
