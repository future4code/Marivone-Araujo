import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {ListaCadastrados} from "./Componentes/ListaCadastrados"
import { PgCadastro } from "./Componentes/PgCadastro";

const ContainerPrincipal =  styled.div`
/* border: 1px solid black; */
text-align:center;
`
const ButtonScreenChoice =  styled.button`
background-color: burlywood;
margin: 50px;
border:none;
border-radius: 3px;
padding: 6px;
text-align:center;
`


export default class App extends React.Component {
  state = {
    usuarios: [],
    inputName: "",
    inputEmail: "",
    defineTela: true

  }

defineTela =() =>{
  this.setState({defineTela:!this.state.defineTela})
} 
   
  render() {   
    return (
      <div>
      <ContainerPrincipal>
        
        <h1>Labenusers</h1>        
                
       {this.state.defineTela ? <PgCadastro/> : <ListaCadastrados />}
      
      </ContainerPrincipal>

       
      <ButtonScreenChoice onClick={this.defineTela}> Página Seguinte </ButtonScreenChoice>
</div>

    );
  }

}

