import React, { Component } from "react"
import axios from "axios"
import VerPlaylists from "./VerPlaylist"
import PlaylistDetails from "./PlaylistDetails"
import styled from "styled-components"

const H = styled.h1`
text-shadow: 2px 2px 2px black;
`
const C = styled.h2`
text-shadow: 1.5px 1.5px 1.5px black;
`

const BotaoGo = styled.button`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
border: none;
color: white;
background-color: purple;
margin: 3px;
border-radius: 3px;
padding: 4px;
text-shadow: 1.5px 1.5px 1.5px black;
:hover{
    position: relative;
    top: 3px;
`

const BotaoVerPL = styled.button`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;border: black;
color: black;
background-color: blueviolet;
border-radius: 3px;
margin-bottom: 5px;
padding: 4px;
color: white;
text-shadow: 1.5px 1.5px 1.5px black;
:hover{
    position: relative;
    top: 3px;
`
const NomePlaylist = styled.input`
padding: 3px;
`
const Page = styled.div`
text-align: center;
`


export default class Home extends React.Component{
state ={
   
    consultarPL: false,
    id: []
}

goPlaylistDetails = () => {
    this.setState({playlist:!this.state.consultarPL})
  }

changeScreen = () =>{

   if (this.state.playlist){
     return <VerPlaylists goPlaylistDetails={this.goPlaylistDetails}/>
   } else{
     return <PlaylistDetails goPlaylistDetails={this.goPlaylistDetails}/>
   }
}


handleinputPlaylistName = (e) =>{
    this.setState({inputPlaylistName: e.target.value})
}

registerPlaylist = () =>{
    const body = {
        name: this.state.inputPlaylistName         
    }

    axios.post ("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
        headers: {
            Authorization: 'marivone-araujo-epps'
        }
    })
    .then((res) =>{
        console.log(res)
        alert ("Playlist criada!")
        this.setState({
            inputPlaylistName:""
        })        
    }) 
    .catch((error) =>{
        console.log(error)
        alert ("não funfou!" + error.message)
    })
}

    render(){
        return(
        <Page>
                <H>Labefy</H>

                <C>Crie sua playlist!</C>
            <p>
                <NomePlaylist id="PlaylistName" placeholder= "Nome da playlist" value={this.state.inputPlaylistName} onChange= {this.handleinputPlaylistName}/>            
                <BotaoGo onClick = {this.registerPlaylist}>go!</BotaoGo>
            </p>                        

            <p>
            <BotaoVerPL onClick = {this.props.goPlaylists}>Ver Playlists</BotaoVerPL>
            </p>
            
        </Page> 
        )
    }
}
