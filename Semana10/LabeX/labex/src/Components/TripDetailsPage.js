import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import axios from "axios"
import {useHistory} from "react-router-dom"
import {goToAdmDetails} from '../Routes/Coordinator'
import AdmDetails from './AdmDetails'


const MainGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1.4fr 1fr;

`
const ButtonCreate = styled.button`
font-size: 25px;
margin: 50px;
margin-top: 200px;
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
overflow: scroll;
height: 60vh;
overflow-x:hidden;
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
  const [candidates, setCandidates] = useState()
  const [showPage, setShowPage] = useState(false)
  const [tripId, setTripId] = useState([])    
 
  const historian = useHistory()
  const goToCreate = () =>{
   history.push("/trips/create")
  }
  const history = useHistory() 
  
  const showAdmDetails = () =>{
    if (showPage===true){      
      return(<AdmDetails  viagens={tripId} candidatos={candidates} />)      
    }    
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
  const getTripDetails = (id) =>{

    axios.get (`https://us-central1-labenu-apis.cloudfunctions.net/labeX/marivone-araujo-epps/trip/${id}`, {
      headers:{
        auth: localStorage.getItem("token")      }
    })
    .then((res) =>{
        
        setTripId(res.data.trip)
        setCandidates(res.data.trip.candidates) 

      console.log(res.data.trip)
      console.log(res.data.trip.candidates)      
    })
    .catch((err) =>{
        console.log(err)
    })
  }

  return (


    <MainGrid>

    <div><ButtonCreate onClick={goToCreate}>Criar Viagem</ButtonCreate></div>

    
    <div>
    <Titulo><strong>Lista de Viagens</strong></Titulo>

      <Trips >

   {trips.map((trip) => {
            return (
            <CardGrid>
              <p>{trip.name}</p>

              <ButtonTripDetails 

              onClick={() => getTripDetails(trip.id) ||setShowPage(!showPage)} >
                
                TripDetails
              
              </ButtonTripDetails>
              
            </CardGrid>              
        )})}
      
      
       </Trips>
      </div>

      {showAdmDetails()}

    </MainGrid>



  );
}

export default TripDetails;
