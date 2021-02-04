import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import axios from "axios"
import {useHistory} from "react-router-dom"


const CardGrid = styled.div`
font-family: monospace;
width: 300px;
height: 200px;
margin: 25px;
padding: 5px; 

padding-left: 50px;
background-color: white;
color: black;
top: 10px;
left: 30px;
border-radius: 10px;
opacity: 0.7;
box-shadow: 0px 0.5px 15px gray;

:hover{
  cursor: pointer;
  color: blue;
  transform: scale(1.1);
} 

`

const ButtonDits = styled.button`
font-family: monospace;
background-color: white;
:hover{
  cursor: pointer;
  color: blue;
  transform: scale(1.2);
`

function TripsListPage() {
  const [trips, setTrips] = useState([])
  
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

  const history = useHistory()
  const goToApplication = () =>{
   history.push("/Cadastro")
  }

  return (
    <div >
   {trips.map((trip) => {
            return (
            <CardGrid>
            <p>{trip.img}</p>
            <p><strong>Experiência: {trip.name}</strong></p>
            <p>Planeta: {trip.planet}</p>
	          <p>Duração: {trip.durationInDays} dias</p>
            <p>"{trip.description}"</p>
            <p>Partida: {trip.date}</p>

            <ButtonDits onClick={goToApplication}>Candidatar-se</ButtonDits>              
            </CardGrid>              
        )})}
       </div>
  );
}
export default TripsListPage;
