import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


const BotaoLista = styled.div`
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
  state = {
    usuarios: [],
    name: "",
    email: "",
    defineTela: false

  }

  defineTela = () =>{
    if(this.state.defineTela){
      return(
       <div>
        <h3>Alunos Cadastrados</h3>
        {/* <div>{pegarUsuarios()}</div>    */}
        <p>
        <button onClick ={this.voltar}>Voltar</button>
        </p>
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
              value={this.state.name}
              onChange={this.onChangeNome} />
          </p>
          <p>
            <label for="email">E-mail: </label>
            <input
              id="email"
              className="Email"
              type="text"
              value={this.state.email}
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
  
  mostrarCadastrados =()=>{
    this.setState({defineTela: true})
  }

  voltar =()=>{
    this.setState({defineTela: false})
  }

  componentDidMount = () => {
    this.pegarUsuarios()
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
    this.setState({ name: e.target.value })
  }

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  criarUsuario = () => {
    const body = {
      name: this.state.name,
      email: this.state.email
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

    const renderedPegarUsuarios = this.state.usuarios.map((usuario) => {
      return <p>{usuario.name}</p>
    })

    return (


      <div>

        {this.defineTela()}
        <div>{renderedPegarUsuarios}</div>   


      </div>

    );
  }

}

