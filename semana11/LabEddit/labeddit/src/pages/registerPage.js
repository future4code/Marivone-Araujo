import React from "react";
import SignUp from "../components/SignUp"

function RegisterPage({setRightButton}) {
  return (
    <div>
      <SignUp setRightButton={setRightButton} />

    </div>
  );
}

export default RegisterPage;
