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

      <label for="planeta">Planeta:</label>
      <p><input type="text" id="planeta"/></p>
      
      <label for="date">Data (dias):</label>
      <p><input type="number" id="date"/></p>
     
      <label for="descricao">Descrição:</label>
      <p><input type="descricao" id="date"/></p>
         
      
    </CreateTripForm>

    </div>
  );
}
  
export default CreateTripPage;
