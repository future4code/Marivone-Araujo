import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { PgCadastro } from "./PgCadastro";
import {axiosConfig, baseUrl, parameters} from "../parameters"


const ButtonDelete =  styled.button`
background-color: white;
color: red;
margin: 10px;
border: none;
text-align:center;
`

export class ListaCadastrados extends React.Component {
state = {
    usuarios: [],
}

  componentDidMount = () => {
    this.pegarUsuarios()
  }

  pegarUsuarios = async () => {
    try{
    const resposta = await axios.get( baseUrl,axiosConfig)

      this.setState({ usuarios: resposta.data })
    } catch (erro){
      console.log(erro.message)
      alert("Impossível pegar usuários" + erro.message)
    }
  }

  deletarCadastrado = async (id) => {
    try{
    const resposta = await axios.delete(`${baseUrl}/${id}`, axiosConfig)
      console.log(resposta)
      this.pegarUsuarios()
    } catch (erro) {
        console.log(erro)
      }
  }



  render() {
    return(

    <div>      

      <h3>Alunos Cadastrados</h3>

      {this.state.usuarios.map((usuario) => {
        return(
          <p> {usuario.name}

          <ButtonDelete onClick= {() => {this.deletarCadastrado(usuario.id)}} >X<strong></strong></ButtonDelete>

          </p>

        )
      }
      
      )}    
    </div>

    )}} 
