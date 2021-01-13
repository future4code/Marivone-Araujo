import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


const ContainerCentral = styled.div`
border: 1px solid black;
text-align:center;
`
const ContainerAlunos =  styled.div`
display: flex;
border: 1px solid black;
text-align:center;
`
const BotaoDeleta = styled.button`
color: blue;
margin: 4px;
`


export default class App extends React.Component {
  state = {
    usuarios: [],
    inputName: "",
    inputEmail: "",
    defineTela: false

  }

  defineTela = () =>{

      const renderedPegarUsuarios = this.state.usuarios.map((usuario) => {
      return <p>{usuario.name}   
             
             <BotaoDeleta onClick= {() => {this.deletarCadastrado(usuario.id)}} >X<strong></strong></BotaoDeleta>
             </p>})

    if(this.state.defineTela){
      return(               
        <div>
        <p>
        <button onClick ={this.voltar}>Voltar</button>
        </p>

        <h3>Alunos Cadastrados</h3> 

        <ContainerAlunos>       
            
        <div>{renderedPegarUsuarios}
        
        </div>          
        </ContainerAlunos>
        
        </div>
      )
    } else{
      return(
        <ContainerCentral>
          <h3>Cadastrar Alunos</h3>
          <p>
            <label for="name">Nome: </label>
            <input
              id="name"
              className="Name"
              type="text"
              value={this.state.inputName}
              onChange={this.onChangeNome} />
          </p>
          <p>
            <label for="email">E-mail: </label>
            <input
              id="email"
              className="Email"
              type="text"
              value={this.state.inputEmail}
              onChange={this.onChangeEmail} />
          </p>
          <p>
            <button
              className="salvar"
              criarUsuario=""
              onClick={this.criarUsuario}
            >Salvar</button>
          </p>
          
          <p>
          <button onClick ={this.mostrarCadastrados} >Mostrar cadastrados</button>
          </p>
        
        </ContainerCentral>
      )
    }
  }
  
  componentDidMount = () => {
    this.pegarUsuarios()
  }
 
  mostrarCadastrados =()=>{
    this.setState({defineTela: true})
  }

  voltar =()=>{
    this.setState({defineTela: false})
  }

  deletarCadastrado = (id) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
      headers: {
        Authorization: "marivone-araujo-epps"
        }
      }).then((resposta) => {
        console.log(resposta)
        this.pegarUsuarios()
      }).catch((erro) =>{
        console.log(erro)
      })
  }
  

  pegarUsuarios = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: "marivone-araujo-epps"
      }
    }).then((resposta) => {
      this.setState({ usuarios: resposta.data })
    }).catch((erro) => {
      console.log(erro.message)
      alert("Impossível pegar usuários" + erro.message)
    })
  }

  onChangeNome = (e) => {
    this.setState({ inputName: e.target.value })
  }

  onChangeEmail = (e) => {
    this.setState({ inputEmail: e.target.value })
  }

  criarUsuario = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body,
      {
        headers: {
          Authorization: "marivone-araujo-epps",
        }
      }).then(() => {
        alert("Cadastro realizado!")
        this.setState({ name: "", email: "" })
        this.pegarUsuarios()
      }).catch((erro) => {
        console.log(body)
        alert("Usuário não foi cadastrado..." + erro.message)
      })
  }
  render() {

    //   const renderedPegarUsuarios = this.state.usuarios.map((usuario) => {
    //   return <p>{usuario.name}</p>
    // })

    return (
      <div>
        {this.defineTela()}
        {/* <div>{renderedPegarUsuarios}</div>   */}
        
      </div>

    );
  }

}

