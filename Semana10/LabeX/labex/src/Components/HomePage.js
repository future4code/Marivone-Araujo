import axios from 'axios'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'


const Main = styled.div`
height: 2000px;

`
const MainIMG = styled.img`
margin-top: -140px;
width: 100%;
`
const SearchTrip = styled.input`
font-family: monospace;
background-image: url('https://i.imgur.com/m5OPwOk.png');
background-position: 99%;
background-repeat: no-repeat;
background-size:3.5%;
width: 800px;
height: 25px;
margin-left: 18%;
margin-top: 30px;
margin-bottom: 30px;
border-top: none;
border-left: none;
border-right: none;
:hover{
  cursor: pointer;
}
`
const Contador = styled.div`
margin-left: 320px;
font-size: 20px;
font-family: monospace;
`

const GridTrips = styled.div`
/* background-color: yellow; */
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`

const CardGrid = styled.div`
font-family: monospace;
background-color: red;
border: 1px solid black;
width: 360px;
height: 300px;
margin: 30px;`

const ButtonDetails = styled.button`
font-family: monospace;
border: none;
background-color: white;
:hover{
  cursor: pointer;
  color: blue;
  transform: scale(1.2);
} 
`

function HomePage() {
  const [trips, setTrips] = useState([])
  const [textInput, setTextInput] =  useState("")

  const handleTextInput = (e) =>{
    setTextInput(e.target.value)    
  }
  
  useEffect (() => {
    axios.get ('https://us-central1-labenu-apis.cloudfunctions.net/labeX/marivone-epps/trips')
    .then((response) =>{
      setTrips(response.data.trips)
      console.log(response.data.trips)
    })
    .catch((err) =>{
          console.log(err)
          alert ("Aconteceu um probleminha..." + err)
        })

  }, [])

  const filteredTrips = trips.filter(trip => trip.name.includes(textInput))


  return (
    <Main>
    
      <MainIMG src = "https://cdn.pixabay.com/photo/2016/10/30/20/22/astronaut-1784245_1280.jpg"/>

      <SearchTrip type="text" placeholder= "Busque aqui pelas melhores viagens espaciais!" onChange={handleTextInput} value={textInput}/>
      <Contador><i>Temos <strong>{filteredTrips.length}</strong> experiências inesquecíveis esperando por você!</i></Contador>

      <GridTrips>
          
        {filteredTrips.map((trip) => {
            return (
            <CardGrid>
            <p>{trip.img}</p>
            <p>{trip.name}</p>
            <p>{trip.planet}</p>
	          <p>{trip.durationInDays}</p>
            <p>{trip.date}</p>

            <ButtonDetails><strong>+Detalhes</strong></ButtonDetails>              
            </CardGrid>              
        )})}
          
      </GridTrips>
      
    </Main>
  );
}

export default HomePage;

