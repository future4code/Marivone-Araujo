import React from 'react'
import styled from 'styled-components'
import Header from './Header'

const CreateTripForm = styled.div`
margin-top: -140px;
margin-left: 500px;
`

function CreateTripPage() {
  
  return (
    <div>
    <Header />
        
    <CreateTripForm>

      <h1>Crie uma viagem:</h1>
  
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
  
//   return (

//     <div>
//     <Header />

//       <div>id:</div>
//       <div>name:</div>
//       <div>planet</div>
//       <div>date</div>
//       <div>description</div>
//       <div>Duration Days</div>
    
      
//     </div>
//   );
// }

export default CreateTripPage;
