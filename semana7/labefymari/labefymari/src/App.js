import React from "react"
// import logo from './logo.svg';
import './App.css';
import Home from "./componentes/Home";
import VerPlaylists from "./componentes/VerPlaylist";
import styled from "styled-components"


const TelaCheia = styled.div`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
text-align: center;
background-color: darkorange;
color: white;
width: 500px;
border-radius: 90px;
box-shadow: 3px 3px 4px gray;
margin-left: 400px;

`


export default class App extends React.Component {
  state = {
    playlist: false
    
  }

  goPlaylists = () => {
    this.setState({playlist:!this.state.playlist})
  }

 
  setScreen = () =>{

    if (this.state.playlist){
      return <VerPlaylists goPlaylists={this.goPlaylists}/>
    } else{
      return <Home goPlaylists={this.goPlaylists}/>
    }
  }
  render() {
    return (
      <TelaCheia>
        
        <p>{this.setScreen()}</p>
             
      
      </TelaCheia>
    );
  }
}
