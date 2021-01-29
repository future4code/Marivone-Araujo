import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from "axios";

const MainLayout = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`
const Top = styled.div`
background-color: white;
// border: 1px solid black;
color: white;
height: 15vh;
place-items: center;
`
const BackButton = styled.img`
margin-top: 2%;
width: 75px;
height: 65px;
:hover{
  cursor: pointer;
  
}
`
const Logo1 = styled.img`
width: 70%;
margin-left: 40px;
// margin-bottom: 40px;

`
const Center = styled.div`
color: black;
height: 200vh;
`
const IMG = styled.img`
width: 10vh;
height: 10vh;
border-radius: 100%;
`

const CentralLine = styled.div`
border: 2px dotted black;

`
const MiniGrid = styled.div`
border-bottom: 2px dotted black;
text-align: center;
padding: 10px;
`
const CleanMatches = styled.button`
border: 1px solid #c70000;
color: white;
background-color: #c70000;
padding: 10px 5px;
// border-radius: 50px;
margin-left: 40px;
margin-top: 300px;
`


function Match(props) {
    const [match, setMatch] = useState([])
    
    
    const getAllMatches = () =>{
        axios.get (`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marivone/matches`)
        .then (response => setMatch(response.data.matches))
        .catch(error => console.log(error))  
      }

      useEffect(() =>{
        getAllMatches()
      }, [])    

            
      const clearAllMatches = () =>{        
        axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marivone/clear`)

      .then((res) => {
        console.log(res)
        alert ("Sem matches!")
        getAllMatches()

      })
      .catch((err) =>{
        console.log(err)
        alert ("Aconteceu um probleminha..." + err)
      })
    }
    
  return (
<MainLayout>
    <oi></oi>
    
    <CentralLine>
        <Top>
            <BackButton src="https://static.vecteezy.com/system/resources/previews/001/186/864/non_2x/heart-arrow-png.png" onClick={props.changeToMatch} />

            <Logo1 src='https://i.imgur.com/wWt4yEh.jpg'/>

        </Top>

        <Center> 

        {match.map((matching) =>{
            return( 
                <MiniGrid><IMG src={matching.photo}/>
                
                <strong>{matching.name}</strong></MiniGrid> 
            ) 
        })}
        
        </Center>     
    </CentralLine>

    <p><CleanMatches onClick = {clearAllMatches}>Limpar matches</CleanMatches></p>
</MainLayout>
  );
}

export default Match;
