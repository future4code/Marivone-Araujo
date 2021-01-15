import React from "react"
import axios from "axios"

export default class Home extends React.Component{
state ={
    inputPlaylistName:"",
    inputName:"",
    inputArtist:"",
    inputSong:""
}

handleinputPlaylistName = (e) =>{
    this.setState({inputPlaylistName: e.target.value})
}

handleinputSongName = (e) =>{
    this.setState({inputName: e.target.value})
}

handleinputArtist = (e) =>{
    this.setState({inputArtist: e.target.value})
}

handleinputSong = (e) =>{
    this.setState({inputSong: e.target.value})
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
        alert ("Funfou!")
        
    }) 
    .catch((error) =>{
        console.log(error)
        alert ("não funfou!" + error.message)
    })
}

createPlaylist = () =>{
    const body = {
        name: this.state.inputName,
        artist: this.state.inputArtist,
        url: this.state.inputSong
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks", body, {
        headers: {
            Authorization: 'marivone-araujo-epps'
        }
    })
    .then((res) =>{
        console.log(res)
        alert ("Funfou!")
    }) 
    .catch((error) =>{
        console.log(error)
        alert ("não funfou!" + error.message)
    })
}

    render(){
        return(
            <div>
                <h1>Labefy</h1>
                <button onClick = {this.props.goPlaylists}>Ver Playlist</button>            

            <p>
            <label for="PlaylistName">Nome da playlist: </label>
            <input id="PlaylistName" placeholder= "Nome da playlist" value={this.state.inputPlaylistName} onChange= {this.handleinputPlaylistName}/>
            
            <button onClick = {this.registerPlaylist}>Cadastre sua playlist!</button>
            </p>

            <p></p>
            <label for="SongName">Nome da música: </label>
            <input id="SongName" placeholder= "Nome da música" value={this.state.inputName} onChange={this.handleinputSongName} />
        
            <p></p>
            <label for="artist"> Nome do artista: </label>
            <input id="artist" placeholder= "Nome do artista" value={this.state.inputArtist} onChange={this.handleinputArtist}/>
        
            <p></p>
            <label for="song">Link da música: </label>
            <input id="song" placeholder= "Link da música" value={this.state.inputSong} onChange={this.handleinputSong}/>


            <p></p>
            <button onClick = {this.createPlaylist} >Crie sua playlist!</button>
            </div>
        )
    }
}
