import React from 'react'
import styled from 'styled-components'
import {useHistory} from "react-router-dom"
import { goToLogin } from "../Routes/Coordinator";
import { goToHome } from "../Routes/Coordinator";
import { goToTripsList } from "../Routes/Coordinator";
import { goToApplication } from "../Routes/Coordinator";
import { goToAbout } from "../Routes/Coordinator";


const HeaderLayout = styled.div`
display: grid;
grid-template-rows: 1fr 1fr;
`
const Logo = styled.img`
width: 36%;
margin-left: 46%;
:hover{
  cursor: pointer;
 }
`

const Menu = styled.div`
display: grid;
grid-template-columns: 0.4fr 0.4fr 0.5fr 0.7fr 0.4fr 1.2fr 1fr 0.7fr;
`

const MenuButton = styled.button`
font-family: font-family: monospace;
background-color: white;
font-size: 20px;
border: none;
:hover{
  cursor: pointer;
  left: 9px;   
  color: blue;
  transform: scale(1.2);
}

`

const LogoFacebook = styled.img`
width: 26%;
position: relative;
top: 6px;
:hover{
  cursor: pointer;
  left: 5px;   
  color: blue;
  transform: scale(1.2);
}
`

const LogoTwitter = styled.img`
width: 20%;
:hover{
  cursor: pointer;
  left: 5px;     
  transform: scale(1.2);
}
`

const LogoInstagram = styled.img`
width: 30%;
:hover{
  cursor: pointer;
  left: 5px;   
  transform: scale(1.2);
}
`

  const Header = () => {
    const history = useHistory()

  

  return (
    <HeaderLayout>
      
      <Logo src="https://i.imgur.com/VGSIBxH.jpg" alt = "Logo" onClick={() => goToHome(history)}/>
   

      <div>

      <Menu>  
        
        <div><MenuButton onClick={() => goToLogin(history)}>login</MenuButton></div>

        <div><MenuButton onClick={() => goToHome(history)}>home</MenuButton></div>

        <div><MenuButton onClick={() => goToTripsList(history)}>destinos</MenuButton></div>

        <div><MenuButton onClick={() => goToApplication(history)}>cadastre-se</MenuButton></div>

        <div><MenuButton onClick={() => goToAbout(history)}>sobre</MenuButton></div>


        <div></div>
        <div></div>
             

        <div><a href="https://www.facebook.com/" target="_blank" ><LogoFacebook src="https://cdn3.iconfinder.com/data/icons/glypho-social-and-other-logos/64/logo-facebook-512.png" alt="Facebook"/></a>

        <a href="https://twitter.com/login?lang=pt" target="_blank"><LogoTwitter src="https://image.flaticon.com/icons/png/512/23/23681.png" alt="Twitter"/></a>
      
        <a href="https://www.instagram.com/?hl=pt-br" target="_blank"><LogoInstagram src="https://i.pinimg.com/originals/63/9b/3d/639b3dafb544d6f061fcddd2d6686ddb.png" alt="Instagram"/></a>

        </div>
        
      </Menu>
      
      </div>
    </HeaderLayout>
  );
}

export default Header;
