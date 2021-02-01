import React from 'react'
import Header from './Header';
import styled from 'styled-components'

const Central = styled.div` 
width: 100%;
height: 700px;;
margin-top: -136px;
background-image: url('https://arquitetoexpert.com/wp-content/uploads/2019/01/rocket.jpg');
background-repeat: no-repeat;
background-size:100%;
color: white;
`

const Form = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
padding-left: 350px;
padding-top: 150px;
/* border: 1px solid white; */

`

function Login() {
  return (
    <div>
      <Header />
      
      <Central>
      
      <Form>
        <div></div>
        <div></div>

      <div>
        <h1>Login</h1>

        <label for="email">Email:</label>      
        <p><input id="email"/></p>

        <label for="senha">Senha:</label>      
        <p><input id="senha"/></p>
        </div>

      </Form>

      </Central>
      
    </div>
  );
}

export default Login;
