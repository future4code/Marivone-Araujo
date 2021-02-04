import React, {useState} from 'react'
import {useInput} from '../hooks/useInput'
import styled from 'styled-components'
import axios from 'axios';

const CreateTripForm = styled.div`
font-family: monospace;
margin-left: 500px;
`

function CreateTripPage() {
  const [name, handleName] = useInput();
  const [planet, handlePlanet] = useInput();
  const [date, handleDate] = useInput();
  const [descript, handleDescript] = useInput();
  const [duration, handleDuration] = useInput();

  const CreateTrip =() =>{

    const body ={    
      name: name,
      planet: planet,
      date: date,
      description: descript,
      durationInDays: duration    
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/marivone-araujo-epps/trips", body,{
      headers:{
        auth: localStorage.getItem("token")
      }
    })
    .then((res) =>{
        // useInput(res.data.trip)
        localStorage.setItem("token", res.data.token)
  
    })
    .catch((err) =>{
        console.log(err)
    })
  } 

  
  return (
    <div>
       
    <CreateTripForm>

      <h1>Crie uma viagem:</h1>

      {/* <label for="img">IMG.JPG</label>       */}
      {/* <p><input id="img"/></p> */}

      <label for="name">Nome:</label>
      <p><input id="name" value={name} onChange={handleName}/></p>

      <label for="planeta">Planeta:</label>
      <p><input type="text" id="planeta" value={planet} onChange={handlePlanet}/></p>
      
      <label for="date">Data (dias):</label>
      <p><input type="date" id="date" value={date} onChange={handleDate}/></p>
     
      <label for="descricao">Descrição:</label>
      <p><textarea type="descricao" id="date" value ={descript} onChange={handleDescript}/></p>

      <label for="duration">Duração (Dias):</label>
      <p><input type="number" id="date" value ={duration} onChange={handleDuration}/></p>

      <button onClick={CreateTrip}>Criar Viagem</button>
         
      
    </CreateTripForm>

    </div>
  );
}
  
export default CreateTripPage;
