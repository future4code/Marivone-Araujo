import React from "react";
import SignIn from "../components/SignIn";
import {useHistory} from "react-router-dom";
import { useProtectedPage } from '../hooks/useProtectedPage';


function LoginPage() {
  
  const history = useHistory();
  useProtectedPage()

  return (
    <div>
      <SignIn />
    </div>
  );
}



export default LoginPage;
