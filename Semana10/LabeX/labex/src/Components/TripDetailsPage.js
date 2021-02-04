import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import axios from "axios"
import {useHistory} from "react-router-dom"


const ButtonCreate = styled.button`
font-size: 25px;
margin: 50px;
margin-left: 140px;
width: 150px;
height: 100px;
font-family: monospace;
background-color: white;
:hover{
  cursor: pointer;
  color: blue;

}
`

const CardGrid = styled.div`
font-family: monospace;
width: 300px;
height: 150px;
margin: 50px;
padding: 30px;
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
 }
`

const Titulo = styled.div`
font-family: monospace;
font-size: 25px;
width: 300px;
margin: 30px;
padding-left: 75px;
`

const Trips = styled.div`
font-size: 20px;
color: white;
`

const ButtonTripDetails = styled.button`
font-family: monospace;
background-color: white;
:hover{
  cursor: pointer;
  color: blue;
  transform: scale(1.2);
}
`

function TripDetails() {

  const [trips, setTrips] = useState([])

  const history = useHistory()
  const goToCreate = () =>{
   history.push("/trips/create")
  }



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

  
 

  return (
    <div>

    <ButtonCreate onClick={goToCreate}>Criar Viagem</ButtonCreate>

    <Titulo><strong>Lista de Viagens</strong></Titulo>

      <Trips >
   {trips.map((trip) => {
            return (
            <CardGrid>
              <p>{trip.name}</p>

              <ButtonTripDetails>TripDetails</ButtonTripDetails>
            </CardGrid>              
        )})}
       </Trips>
            
    </div>
  );
}

export default TripDetails;
