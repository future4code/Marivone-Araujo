import React from "react";
import SignIn from "../components/SignIn";

function LoginPage({setRightButton}) {
  
  return (
    <div>
      <SignIn setRightButton={ setRightButton}/>
    </div>
  );
}

export default LoginPage;
