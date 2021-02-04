import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import axios from "axios"
import {useHistory} from "react-router-dom"

const CardGrid = styled.div`
font-family: monospace;
background-color: red;
border: 1px solid black;

/* width: 360px;
height: 250px; */
`

const ButtonTripDetails =styled.div`
border: none;
:hover{
  cursor:pointer;
}
`

function TripDetails() {

  const [trips, setTrips] = useState([])

  const history = useHistory()
  const goToCreate = () =>{
   history.push("/trips/create")
  }

  const historian = useHistory()
  const goToAdmDetails = () =>{
   history.push("/trips/AdmDetails")
  }


  useEffect (() => {
    axios.get ('https://us-central1-labenu-apis.cloudfunctions.net/labeX/marivone-epps/trips', {
      headers:{
        auth:localStorage.getItem("token")
      }
    })
    .then((res) =>{
      setTrips(res.data.trips)
      console.log(res.data.trips)
    })
    .catch((err) =>{
          console.log(err)
          alert ("Aconteceu um probleminha..." + err)
        })

  }, [])


  return (
    <div>

    <button onClick={goToCreate}>Criar Viagem</button>

    <div><strong>Lista de Viagens</strong></div>

      <div >
   {trips.map((trip) => {
            return (
            <CardGrid>
              <ButtonTripDetails onClick={goToAdmDetails}>{trip.name}</ButtonTripDetails>
            </CardGrid>              
        )})}
       </div>
            
    </div>
  );
}

export default TripDetails;
