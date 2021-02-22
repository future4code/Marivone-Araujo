import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import {goToLoginPage, goToRegisterPage} from "../Routes/Coordinator"

const HeaderTop = styled.div`
display: grid;
grid-template-columns: 7fr 3fr;
column-gap: 500px;
`
const Title = styled.div`
color: black;
height: 20vh;
text-align: center;
font-size: 100px;
font-family: 'Open Sans', sans-serif;
font-family: 'Open Sans Condensed', sans-serif;
text-shadow: 1px 1px 1px gray;
:hover{
  cursor: pointer;
}
`
const ButtonRegister = styled.button`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
text-shadow: 1px 1px 1px gray; 
width: 100px;
height: 30px;
margin-top: 70px;
border: none;
background-color: #b19cd9;
color: white;
border-radius: 3px;
box-shadow: 1px 1px 1px gray;
:hover{
  cursor: pointer;
  background-color: #6A0DAD;
  transform: scale(1.1);  
}
`


function Header() {

  const history = useHistory()

  return (
    <HeaderTop>
      <Title onClick={() => goToLoginPage(history)}>LabEddit</Title>

      <ButtonRegister onClick={() => goToRegisterPage(history)}>Cadastre-se</ButtonRegister>
    </HeaderTop>
  );
}

export default Header;
