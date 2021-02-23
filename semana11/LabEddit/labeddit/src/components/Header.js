import React from 'react';
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom";
import {goToLoginPage, goToFeedPage} from "../Routes/Coordinator";

const StyledToolbar = styled(Toolbar)`
display: flex;
flex-direction: row;
justify-content: space-between;
`


const Header = ({rightButton, setRightButton}) => {  
  const token = localStorage.getItem("token")
  const history = useHistory()
 
  
  const logout = () =>{
    localStorage.removeItem("token")
  }
  const rightButtonChange = () =>{
    if (token){
      logout()
      setRightButton("Login")
      goToLoginPage(history)
    } else{
      goToLoginPage(history)
    }
  }

  return (
      <AppBar position="static">
        <StyledToolbar>
          <Button color="inherit" onClick={() => goToFeedPage(history)}>LabEddit</Button>

          <Button color="inherit" onClick={ rightButtonChange}>{rightButton}</Button>

        </StyledToolbar>
      </AppBar>
    
  );
}

export default Header 