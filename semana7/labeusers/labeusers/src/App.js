import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


const BotaoTopo = styled.div`
/* border: 1px solid black; */
text-align:center;
padding: 1px;
margin: 4px;
`
const ContainerCentral = styled.div`
border: 1px solid black;
text-align:center;
`

export default class App extends React.Component {
  state ={
    usuarios:[],
    name: "",
    email:"",
    mostraLista: false
  }

  componentDidMount = () => {
    this.pegarUsuarios()
  }

  pegarUsuarios = () =>{
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",{
      headers:{
        Authorization:"marivone-araujo-epps"
      }
    }).then((resposta) =>{
      this.setState({usuarios:resposta.data})
    }).catch((erro) =>{
      console.log(erro.message)
      alert ("Impossível pegar usuários" + erro.message)
    })
  }

  onChangeNome = (e)=>{
    this.setState({name: e.target.value})
  }
  
  onChangeEmail = (e)=>{
    this.setState({email: e.target.value})
  }

  criarUsuario = () =>{
    const body ={
      name: this.state.name,
      email: this.state.email
    }
    
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body,
    {
      headers:{
        Authorization: "marivone-araujo-epps",
      }
    }).then(()=>{
      alert("Cadastro realizado!")
      this.setState({name:"", email:""})
      this.pegarUsuarios()
    }).catch((erro) =>{
      console.log(body)
      alert ("Usuário não foi cadastrado" + erro.message)
    })
  }

  mostraLista = ()=>{
    this.setState({mostraLista: !this.state.mostraLista})
  }

  render() {

    const renderedPegarUsuarios = this.state.usuarios.map((usuario) =>{
      return <p>{usuario.name}</p>
    })
    
     return (


      <div>           
    
      <ContainerCentral>
        <h3>Cadastro de Alunos</h3>
        <p>
        <label for="name">Nome: </label>
        <input 
        id="nome" 
        className="InputNome" 
        type="text" 
        value= {this.state.name}
        onChange={this.onChangeNome} />
        </p>
        
        <p>     
        <label for="email">E-mail: </label>
        <input 
        id="email" 
        className="InputEmail" 
        type="text" 
        value = {this.state.email}
        onChange = {this.onChangeEmail}/>
        </p>
        <p>
        <button
        
        className="salvar" 
        criarUsuario=""
        onClick={this.criarUsuario} 
        
        >Salvar</button>
        </p>

      </ContainerCentral>

      <BotaoTopo>
      <button 
      className="BotaoPLista"
      onClick={this.mostraLista}
      >
      Ir para a página da lista
      </button>
      </BotaoTopo>
      
      <div>{renderedPegarUsuarios}</div> 

         

      
      
      
  </div>
   
  );
  }
  
} 

