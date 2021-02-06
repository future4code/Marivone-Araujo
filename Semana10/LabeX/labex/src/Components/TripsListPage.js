import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import axios from "axios"
import {useHistory} from "react-router-dom"


const Central = styled.div`
/* width: 100%; */
background-image: url('https://i.ytimg.com/vi/NtOwzU5Rpp8/maxresdefault.jpg');
background-repeat: repeat;
background-size:100%;
color: white;
padding: 10px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`

const CardGrid = styled.div`
font-size: 15px;
font-family: monospace;
width: 315px;
height: 350px;
/* margin: 30px; */
/* margin-left: 430px; */
margin-top: 50px; 

padding: 30px;
background-color: white;
color: black;
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
margin-top: 20px;
:hover{
  cursor: pointer;
  color: blue;
  transform: scale(1.2);
`

function TripsListPage() {
  const [trips, setTrips] = useState([])
  
  useEffect (() => {
    axios.get ('https://us-central1-labenu-apis.cloudfunctions.net/labeX/marivone-araujo-epps/trips')
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
    <Central>
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
       </Central>
  );
}
export default TripsListPage;
