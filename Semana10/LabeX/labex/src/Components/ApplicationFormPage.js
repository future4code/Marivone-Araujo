import React from 'react'
import styled from 'styled-components'
import {useInput} from '../hooks/useInput'


const ApplicationForm = styled.div` 
font-family: monospace;
font-size: 20px;
width: 100%;
height: 900px;;
/* margin-top: -134px; */
background-image: url('https://www.nationalgeographic.com/interactive-assets/nggraphics/ngm-1907-moon-landing-rockets/build-2019-06-13_12-02-54/ngm-assets/img/ngm-1907-moon-landing-rockets_ai2html-desktop-medium.jpg');
background-repeat: no-repeat;
background-size:100%;
background-size:100%;
color: white;
`

const InputsForm = styled.div`
padding-top: 20px;
padding-left: 85px;
`

function Application() {
  const [naming, handlingName] = useInput();
  const [age, handlingAge] = useInput();
  const [country, handleCountry] = useInput();
  const [job, handleJob] = useInput();
  const [destination, handleDestination] = useInput();
  const [why, handleWhy] = useInput();



  return (
    <div>
   
    <ApplicationForm>
    <InputsForm>

      <h2>Candidate-se a uma viagem:</h2>
      <br></br>
      <label for="name">Seu nome completo:</label>      
      <p><input id="name" value={naming} onChange={handlingName}/></p>

      <label for="age">Sua idade:</label>
      <p><input id="age" value={age} onChange={handlingAge}/></p>

      <label for="country">País que reside:</label>
      <p><input id="country" value={country} onChange={handleCountry}/></p>
      

      <label for="job">Sua profissão:</label>
      <p><input id="job" value={job} onChange={handleJob}/></p>

      <label for="destination">Destino dos sonhos:</label>
      <p><input id="destination" value={destination} onChange={handleDestination}/></p>

      <label for="why">Por que escolher <strong>VOCÊ:</strong></label>
      <p><textarea rows= "17" cols="32" id="why" value={why} onChange={handleWhy}/></p>
         
      </InputsForm>
    </ApplicationForm>

    </div>
  );
}

export default Application;
