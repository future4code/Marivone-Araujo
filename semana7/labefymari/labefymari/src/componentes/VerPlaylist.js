import React from "react";
import axios from "axios"
import styled from "styled-components";

const Voltar = styled.button`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;border: black;
color: black;
background-color: blueviolet;
border-radius: 3px;
margin-top: 5px;
padding: 4px;
color: white;
text-shadow: 1.5px 1.5px 1.5px black;
font-size: 15px;
:hover{
    position: relative;
    top: 3px;
}
`

const CriarPL = styled.option`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
border: none;
color: white;
background-color: purple;
margin: 3px;
border-radius: 3px;
padding: 4px;
margin-top: 20px;
font-size: 20px;
text-shadow: 1.5px 1.5px 1.5px black;
:hover{
    position: relative;
    top: 3px;
}
`

const H = styled.h1`
text-shadow: 1.5px 1.5px 1.5px black;
`
const C = styled.h1`
text-shadow: 1.5px 1.5px 1.5px black;
`

const DeletePL = styled.button`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
border: none;
color: white;
background-color: black;
margin: 4px;
border-radius: 3px;
padding: 5px;
font-size: 12px;
:hover{
    position: relative;
    left: 3px;
}

`
const NamePL = styled.button`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
border: none;
color: white;
background-color: purple;
margin: 3px;
border-radius: 3px;
padding: 4px;
margin: 20px;
font-size: 20px;
text-shadow: 1.5px 1.5px 1.5px black;

}
`

export default class VerPlaylists extends React.Component {

    state = {
        playlists: [],
        id: [],
        inputPlaylistName: "",
        inputName: "",
        inputArtist: "",
        inputSong: "",
       
    }


    componentDidMount = () => {
        this.getPlaylists()
    }


    getPlaylists = () => {

        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
            headers: {
                Authorization: 'marivone-araujo-epps'
            }
        })
            .then((res) => {
                this.setState({ playlists: res.data.result.list })
                console.log(res.data.result.list)
                this.setState({ id: res.data.result.list.id })

            })
            .catch((error) => {
                console.log(error)
                alert("Playlists não encontradas!" + error.message)
            })
    }

    deletePlaylist = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {

            headers: {
                Authorization: 'marivone-araujo-epps'
            }
        })
            .then((res) => {
                console.log(res)
                alert("Playlist deletada com sucesso!")
                this.getPlaylists()
            })
            .catch((err) => {
                alert("Playlist não pode ser criada!" + err.menssage)
                console.log(err)
            })
    }

    handleinputSongName = (e) => {
        this.setState({ inputName: e.target.value })
    }

    handleinputArtist = (e) => {
        this.setState({ inputArtist: e.target.value })
    }

    handleinputSong = (e) => {
        this.setState({ inputSong: e.target.value })
    }

    createPlaylist = (id) => {

        console.log(id)

        const body = {
            name: this.state.inputName,
            artist: this.state.inputArtist,
            url: this.state.inputSong
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, body, {
            headers: {
                Authorization: 'marivone-araujo-epps'
            }
        })
            .then((res) => {
                console.log(res)
                this.setState({
                    inputName: "",
                    inputArtist: "",
                    inputSong: "",
                })
                alert("Criada com sucesso!")
                this.getPlaylists()

            })
            .catch((error) => {
                console.log(error)
                alert("Tente novamente!" + error.message)
            })
    }


    render() {
        // console.log(this.state.playlists)

        return (
            <div>
                <Voltar onClick={this.props.goPlaylists}>Voltar</Voltar>

                <C>Agora, insira uma música!</C>
                <p></p>
                <label for="SongName">Título: </label>
                <input id="SongName" placeholder="nome da música" value={this.state.inputName} onChange={this.handleinputSongName} />
                <p></p>
                <label for="artist"> Artista: </label>
                <input id="artist" placeholder="Banda? Cantor?" value={this.state.inputArtist} onChange={this.handleinputArtist} />
                <p></p>
                <label for="song">Link da música: </label>
                <input id="song" placeholder="Manda o Link!" value={this.state.inputSong} onChange={this.handleinputSong} />
                <p></p>
                <div>
                    <label for="select">Escoha a playlist: </label>
                    <select>
                        {this.state.playlists.map((playlist) => {
                            return (
                                <option value={playlist.id}>{playlist.name}</option>
                            )
                        })}
                    </select>
                    <CriarPL onClick={this.createPlaylist}> Postar </CriarPL>
                </div>

                <hr></hr>
                <hr></hr>
                <H>Ver Playlists</H>


                {this.state.playlists.map((playlist) => {
                    return (

                        <div>

                            <NamePL>Sua playlist "{playlist.name}"</NamePL>

                            <DeletePL onClick={() => { this.deletePlaylist(playlist.id) }}>Deletar Playlist</DeletePL>

                        </div>

                    )
                })}

            </div>
        )
    }
}


