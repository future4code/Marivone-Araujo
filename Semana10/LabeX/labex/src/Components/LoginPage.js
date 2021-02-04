import axios from 'axios'
import React, {useState} from 'react'
import styled from 'styled-components'
import {useHistory} from "react-router-dom"




const Central = styled.div` 
width: 100%;
height: 700px;;
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
font-family: monospace;
font-size: 20px;

`

const BoxLogin = styled.div`
font-family: monospace;
width: 250px;
height: 350px;
margin: 25px;
padding: 5px; 

padding-left: 50px;
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

const ButtonDits = styled.button`
font-family: monospace;
background-color: white;
:hover{
  cursor: pointer;
  color: blue;
  transform: scale(1.2);
}
`

function LoginPage() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()


  const handleEmail = (e) =>{
    setEmail (e.target.value)
    
  }

  const handlePassword = (e) =>{
    setPassword (e.target.value)
    
  }

  const Login = () =>{
      const body ={
        email: email,
        password: password
      }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/marivone-araujo-epps/login", body)
      .then((res) =>{
        localStorage.setItem("token", res.data.token)
        history.push('/trips/details')

      }).catch((err) =>{
        console.log(err.message)
        alert (err.message)
      })
  }

  return (
    <div>

      <Central>
              
      <Form>
        <div></div>
        <div></div>

      <BoxLogin>
        <h1>Login</h1>

        <label for="email">Email:</label>      
        <p><input value={email} onChange={handleEmail} id="email"/></p>

        <label for="senha">Senha:</label>      
        <p><input value={password} onChange={handlePassword} id="senha"/></p>

        <ButtonDits onClick={Login}>Enviar</ButtonDits>
      
      
      </BoxLogin>

        

      </Form>

      </Central>
      
    </div>
  );
}

export default LoginPage;
