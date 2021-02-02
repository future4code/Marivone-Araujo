import React from 'react'
import styled from 'styled-components'

const Central = styled.div` 
width: 100%;
height: 700px;;
background-image: url('https://arquitetoexpert.com/wp-content/uploads/2019/01/rocket.jpg');
background-repeat: no-repeat;
background-size:100%;
color: white;
`

// const ButtonCreateTrip = styled.button`
// padding: 2px;
// margin-left: 350px;
// margin-top: 110px;
// font-family: monospace;
// background-color: black;
// color: white;
// box-shadow: 1px 1px 5px gray;
// :hover{
//   cursor: pointer;
//   left: 5px;   
//   transform: scale(1.2);
// }

// `

const Form = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
padding-left: 350px;
padding-top: 150px;
font-family: monospace;
font-size: 20px;
`

function LoginPage() {
  return (
    <div>

      <Central>
        
        {/* <ButtonCreateTrip>Clique para criar viagens!</ButtonCreateTrip> */}
      
      <Form>
        <div></div>
        <div></div>

      <div>
        <h1>Login</h1>

        <label for="email">Email:</label>      
        <p><input id="email"/></p>

        <label for="senha">Senha:</label>      
        <p><input id="senha"/></p>

        <button>Enviar</button>
      
      
      </div>

        

      </Form>

      </Central>
      
    </div>
  );
}

export default LoginPage;
