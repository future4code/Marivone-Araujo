import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from "axios";

const MainLayout = styled.div`
border: 1px solid black;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`
const Top = styled.div`
background-color: red;
// border: 1px solid black;
color: white;
height: 15vh;
place-items: center;
`
const BackButton = styled.button`
// place-items: center;
margin-left: 85%;
margin-top: 15%;
`
const Center = styled.div`
background-color: black;
color: white;
height: 200vh;
`
const IMG = styled.img`
widtch: 10vh;
height: 10vh;
// position: relative;
// top: -150px;
`
const MiniGrid = styled.div`
border: 1px solid white;

`


function Match(props) {
    const [match, setMatch] = useState([])
    
    const getAllMatches = () =>{
        axios.get (`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marivone/matches`)
        .then (response => setMatch(response.data.matches))
        // .then (response => console.log(response.data.matches))
        .catch(error => console.log(error))  
      }

      useEffect(() =>{
        getAllMatches()
      }, [])    


  return (
<MainLayout>
    <oi>Oi</oi>
    <div>
        <Top>
            <BackButton onClick={props.changeToMatch}>Voltar</BackButton>
        </Top>

        <Center> Seus Matches

        {match.map((matching) =>{
            return( 
                <MiniGrid><IMG src={matching.photo}/>{matching.name}</MiniGrid> 
            ) 
        })}
        
        </Center>     

    </div>
    <oi><button>Limpar swipes e matches</button></oi>
</MainLayout>
  );
}

export default Match;
