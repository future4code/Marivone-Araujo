import React from 'react'
// import logo from './logo.svg';
import './App.css';
import {SpaceXPage} from './Componentes/SpaceXPage';
import {ActivityPage} from './Componentes/ActivityPage';

export default class App extends React.Component {
  state ={
    page: true
  }

  changePage = () =>{
    this.setState({page: !this.state.page})
  }

  render(){
    return(
      <div className="App">
      
      <p><button onClick={this.changePage} > Troque de Tela! </button></p>

      <h1>O que você deseja fazer hoje?</h1>
      <hr></hr>

      {this.state.page ? <ActivityPage /> : <SpaceXPage/> }   
                      
      </div>


    )
  } 
}
