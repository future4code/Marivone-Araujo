import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {baseUrl, axiosConfig} from "../parameters"
import { ListaCadastrados } from "./ListaCadastrados";


const ContainerCentral = styled.div`
/* border: 1px solid black; */
text-align:center
`
const ButtonRegister = styled.button`
background-color: lightblue;
border:none;
border-radius: 3px;
padding: 6px;
text-align:center
`

export class PgCadastro extends React.Component {

state = {
    inputName: '',
    inputEmail: ''
}

onChangeName = (e) => {
    this.setState({ inputName: e.target.value })
}

onChangeEmail = (e) => {
    this.setState({ inputEmail: e.target.value })
}

criarUsuario = async () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    }
    try {
    const resposta = await axios.post( baseUrl, body,axiosConfig)
    //   console.log (resposta)
      alert("Cadastro realizado!")
      this.setState({ inputName: "", inputEmail: "" })
    //   this.pegarUsuarios()
 
    } catch(erro) {
        // console.log(body)
        alert("Usuário não foi cadastrado... " + erro)
      }
  }


render() {
return(
    <ContainerCentral>
      <h3>Cadastro de Alunos</h3>
      
      <p>
      <label for="name">Nome: </label>
      <input id="name" placeholder = 'digite seu nome' value= {this.state.inputName} onChange = {this.onChangeName}/>
      </p>

      <p>
      <label for="email">Email: </label>
      <input id="email" placeholder = 'digite seu email' value= {this.state.inputEmail} onChange = {this.onChangeEmail}/>
      </p>

      <ButtonRegister onClick={this.criarUsuario}>Cadastrar</ButtonRegister>
    
    </ContainerCentral>
    
    )}} 
