import React from 'react'
import styled from 'styled-components'

const HeaderLayout = styled.div`
display: grid;
grid-template-rows: 1fr 1fr;
`
const Logo = styled.img`
width: 36%;
margin-left: 40%;
`

const Menu = styled.div`
display: grid;
grid-template-columns: 0.4fr 0.4fr 0.5fr 0.7fr 0.4fr 1.2fr 1fr 0.7fr;
`

const MenuButton = styled.button`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
/* width: 54px; */
/* height: 52px; */
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
/* width: 40px; */
/* height: 40px; */
:hover{
  cursor: pointer;
  left: 5px;     
  transform: scale(1.2);
}
`

const LogoInstagram = styled.img`
width: 30%;
/* width: 60px; */
/* height: 45px; */
:hover{
  cursor: pointer;
  left: 5px;   
  transform: scale(1.2);
}
`



function Header() {
  return (
    <HeaderLayout>
      <Logo src="https://i.imgur.com/VGSIBxH.jpg" alt = "Logo"/>
   

      <div>

      <Menu>  
        
        <div><MenuButton>LOGIN</MenuButton></div>
        <div><MenuButton>HOME</MenuButton></div>
        <div><MenuButton>DESTINOS</MenuButton></div>
        <div><MenuButton>CADASTRE-SE</MenuButton></div>
        <div><MenuButton>SOBRE</MenuButton></div>
        <div></div>
        <div></div>
             

        <div><a href="https://www.facebook.com/" target="_blank" ><LogoFacebook src="https://cdn3.iconfinder.com/data/icons/glypho-social-and-other-logos/64/logo-facebook-512.png" alt="Facebook"/></a>

        <a href="https://twitter.com/login?lang=pt" target="_blank"><LogoTwitter src="https://image.flaticon.com/icons/png/512/23/23681.png" alt="Twitter"/></a>
      
        <a href="https://www.instagram.com/?hl=pt-br" target="_blank"><LogoInstagram src="https://i.pinimg.com/originals/63/9b/3d/639b3dafb544d6f061fcddd2d6686ddb.png" alt="Instagram"/></a>

        </div>
        
      </Menu>
      <hr></hr>


      </div>
    </HeaderLayout>
  );
}

export default Header;
