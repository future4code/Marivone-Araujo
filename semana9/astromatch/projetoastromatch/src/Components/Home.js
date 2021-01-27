import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const MainPage = styled.div`
display: grid;
background-color: lightgray;
grid-template-columns: 1fr 1fr 1fr;  
// border: 1px solid black;
`
const CentralGrid = styled.div`
// background-color: lightblue;
// border: 1px solid black;
color: white;
`
const Top = styled.div`
background-color: red;
// border: 1px solid black;
color: white;
height: 10vh;
`
const MatchButton = styled.button`
margin-left: 75%;
margin-top: 2%;
`
const Center = styled.div`
background-color: white;
// border: 1px solid black;
color: white;
height: 78vh;
padding: 10px;
`
const GridCruch = styled.div`
// border: 1px solid black;
text-align: center;
alin-item: center;

`
const Img = styled.img`
width: 360px;
height: 450px;
// border: 1px solid black;
`
const Descript = styled.div`
background-color: white;
color: black;
position: relative;
top: -150px;
left: 30px;
border-radius: 10px;
opacity: 0.7;
width: 65%;
`

const Like = styled.button`
position: relative;
top: -70px;
left: 150px;
`

const ButtonDontWant = styled.button`
border: none;
color: red;
background-color: white;
`


const Bottom = styled.div`
background-color: lightblue;
border: 1px solid black;
color: white;
height: 10vh;
text-align: center;
`

function Main(props) {

  const [user, setUser] = useState({})

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
        alert ("Gostou, hein?")
        getCruch()

      })
      .catch((err) =>{
        console.log(err)
        alert ("Vê com outros olhos!" + err)
      })
    }

  return (
    
<MainPage>
    <div>Oi</div>
        <CentralGrid>           
            <Top>Astromatch
                <MatchButton onClick={props.stayHome}>Ver Matches</MatchButton>
            </Top>
            <Center>
                <GridCruch> 
                    
                    <Img src={user.photo}/>
                    
                    <Like

                    onClick = {( ()  => doMatch(user.id) )}>Quero</Like>
                     
                      <Descript>
                        <h3>{user.name}, {user.age}</h3>
                        <p>"{user.bio}"</p>

                      </Descript>
                      
                </GridCruch>
            </Center>
            <Bottom>

            <ButtonDontWant>X</ButtonDontWant>
            
              </Bottom>

        </CentralGrid>   
    <div><button>Limpar swipes e matches</button></div>    
</MainPage>
  );
}
export default Main;
