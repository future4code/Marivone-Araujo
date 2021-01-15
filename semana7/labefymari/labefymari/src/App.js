import React from "react"
// import logo from './logo.svg';
import './App.css';
import Home from "./componentes/Home";
import VerPlaylists from "./componentes/VerPlaylist";

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
      <div className="App">
        
        <p>{this.setScreen()}</p>        
      
      </div>
    );
  }
}
