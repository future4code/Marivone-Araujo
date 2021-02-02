import React from 'react'
import styled from 'styled-components'

const ApplicationForm = styled.div` 
font-family: monospace;
font-size: 20px;
width: 100%;
height: 900px;;
margin-top: -134px;
background-image: url('https://www.nationalgeographic.com/interactive-assets/nggraphics/ngm-1907-moon-landing-rockets/build-2019-06-13_12-02-54/ngm-assets/img/ngm-1907-moon-landing-rockets_ai2html-desktop-medium.jpg');
background-repeat: no-repeat;
background-size:100%;
background-size:100%;
color: white;
`

const InputsForm = styled.div`
padding-top: 20px;
padding-left: 100px;
`

function Application() {
  return (
    <div>
   
    <ApplicationForm>
    <InputsForm>

      <h2>Candidate-se a uma viagem:</h2>
      <br></br>
      <label for="name">Seu nome completo:</label>      
      <p><input id="name"/></p>

      <label for="age">Sua idade:</label>
      <p><input id="age"/></p>

      <label for="country">País que reside:</label>
      <p><input id="country"/></p>
      

      <label for="job">Sua profissão:</label>
      <p><input id="job"/></p>

      <label for="destination">Destino dos sonhos:</label>
      <p><input id="destination"/></p>

      <label for="why">Por que escolher <strong>VOCÊ:</strong></label>
      <p><textarea rows= "17" cols="32" id="why"/></p>
         
      </InputsForm>
    </ApplicationForm>

    </div>
  );
}

export default Application;
