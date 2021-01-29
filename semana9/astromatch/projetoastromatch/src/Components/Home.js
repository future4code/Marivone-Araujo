import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'



const Logo = styled.img`
width: 79%;
position: relative;
Top:-74px;
left: 12px;
z-index: 0;
`
const MainPage = styled.div`
display: grid;
background-color: lightgray;
grid-template-columns: 1fr 1fr 1fr;  
`
const HeartsMatch = styled.img`
width: 70px;
height: 70px;
margin-left: 350px;
:hover{
  cursor: pointer;
  top: 5px;
}
`
const CentralGrid = styled.div`
color: white;
border: 2px dotted black;
`
const Top = styled.div`
background-color: white;
color: black;
height: 10vh;
`
const Center = styled.div`
background-color: white;
color: white;
height: 70.8vh;
padding: 10px;
`
const GridCruch = styled.div`
text-align: center;
alin-item: center;
height: 430px;

`
const Img = styled.img`
width: 360px;
height: 400px;
margin-top: 14px;
box-shadow: 0px 5px 15px black;
`
const Bio = styled.p`
position: relative;
top: -20px;
`
const Descript = styled.div`
background-color: white;
color: black;
position: relative;
top: -140px;
left: 30px;
border-radius: 10px;
opacity: 0.7;
width: 70%;
box-shadow: 0px 0.5px 15px gray;
`
const HeartWantButton = styled.img`
width: 75px;
height: 73px;
position: relative;
left: 20px;
:hover{
  cursor: pointer;
  left: 2px;
}
`
const HeartDontWant = styled.img`
width: 72px;
height: 70px;
position: relative;
left: -5px;
:hover{
  cursor: pointer;
  left: 2px;   
  filter: blur (20px) grayscale (100%)
}
`
const Bottom = styled.div`
background-color: white;
// border: 1px solid black;
color: white;
height: 15vh;
text-align: center;

`

function Main(props) {

  const [user, setUser] = useState({})
  const [open, setOpen] = useState(false);

  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  

  const getCruch = () =>{

    axios.get (`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marivone/person`)
    .then (response => setUser(response.data.profile))
    .catch(error => console.log(error))  
  }
  useEffect(() =>{
    getCruch()
  }, {})

 
  const doMatch =(id) =>{

    const body ={
        "id": `${id}`,
        "choice": true
      }

      axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marivone/choose-person
      `, body)

      .then((res) => {
        console.log(res)
        alert ("Será que vai dar match?!? Consulta nos corações alí em cima!")
        getCruch()

      })
      .catch((err) =>{
        console.log(err)
        alert ("Aconteceu um probleminha..." + err)
      })
    }

    const dontMatch =(id) =>{

      const body ={
          "id": `${id}`,
          "choice": false
        }
  
        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marivone/choose-person
        `, body)
  
        .then((res) => {
          console.log(res)
          alert ("Não desiste de procurar!")
          getCruch()
  
        })
        .catch((err) =>{
          console.log(err)
          alert ("Aconteceu um probleminha..." + err)
        })
      }  


  return (
    
<MainPage>
    <p></p>
        <CentralGrid>           
           <Top>

           <HeartsMatch src="https://i.pinimg.com/originals/54/9c/33/549c339b7e3b84f934385943bf4c9088.gif" onClick={props.stayHome}/>

           <Logo src='https://i.imgur.com/wWt4yEh.jpg'/>
                               
                
            </Top>
            <Center>
                <GridCruch> 
                    
                    <Img src={user.photo}/>
                    
                      <Descript>
                        <h3>{user.name}, {user.age}</h3> <Bio>"{user.bio}"</Bio>

                      </Descript>
                      
                </GridCruch>
            </Center>
            <Bottom>

            <HeartDontWant src="https://cdn.shopify.com/s/files/1/1061/1924/products/Broken_Red_Heart_Emoji_1024x1024.png?v=1571606066"
            
            onClick = {( ()  => dontMatch(user.id) )}/>

            <HeartWantButton src="http://pngimg.com/uploads/heart/heart_PNG51341.png" 
                                        
            onClick = {( ()  => doMatch(user.id) )}/>
            
              </Bottom>

        </CentralGrid>

</MainPage>
  );
}
export default Main;
