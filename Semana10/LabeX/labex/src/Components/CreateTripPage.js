import React from 'react'
import styled from 'styled-components'

const CreateTripForm = styled.div`
font-family: monospace;
/* margin-top: -140px; */
margin-left: 500px;
`

function CreateTripPage() {
  
  return (
    <div>
       
    <CreateTripForm>

      <h1>Crie uma viagem:</h1>

      <label for="img">IMG.JPG</label>      
      <p><input id="img"/></p>
  
      <label for="id">ID</label>      
      <p><input id="name"/></p>

      <label for="name">Nome:</label>
      <p><input id="name"/></p>

      <label for="planeta">País que reside:</label>
      <p><select id="country"/></p>
      

      <label for="job">Sua profissão:</label>
      <p><input id="job"/></p>

      <label for="date">Data:</label>
      <p><input type="date" id="date"/></p>

      <label for="description">Duração:</label>
      <p><input type="description" id="date"/></p>

      
      <label for="duration">Descrição:</label>
      <p><input type="duration" id="date"/></p>
         
      
    </CreateTripForm>

    </div>
  );
}
  
export default CreateTripPage;
