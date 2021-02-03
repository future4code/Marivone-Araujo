import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import axios from "axios"
import {useHistory} from "react-router-dom"


const CardGrid = styled.div`
font-family: monospace;
background-color: red;
border: 1px solid black;
width: 360px;
height: 250px;
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
            <p>{trip.name}</p>
            <p>Planeta:{trip.planet}</p>
	          <p>Experiência: {trip.durationInDays} dias</p>
            <p>"{trip.description}"</p>
            <p>Partida: {trip.date}</p>

            <button onClick={goToApplication}>Candidatar-se</button>              
            </CardGrid>              
        )})}
       </div>
  );
}
export default TripsListPage;
