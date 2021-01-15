import React from "react";
import axios from "axios"

export default class VerPlaylists extends React.Component {

    state = {
        playlists: [],
        id: [],
        idFiltrado: ""
    }

    componentDidMount = () => {
        this.getPlaylists()
    }

    idFiltrado = (e) =>{
        console.log(e)       
                   
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
                this.setState({id: res.data.result.list.id})
                

            })
            .catch((error) => {
                console.log(error)
                alert("Playlists não encontradas!" + error.message)
            })
    }

    deletePlaylist = (id) =>{
        axios.delete( `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.idFiltrado}` , {

            headers: {
                Authorization: 'marivone-araujo-epps'
            }
        })
        .then((res) =>{
            console.log(res)
            this.getPlaylists()
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    render() {
        // console.log(this.state.playlists)

        return (
            <div>
                <button onClick={this.props.goPlaylists}>Voltar</button>

                <h1>Ver Playlists</h1> 

                {this.state.playlists.map((playlist) => {
                    return (
                        <div>
                            <h2>{playlist.name}</h2>

                            <button onClick={() => {this.deletePlaylist(playlist.idFiltrado)}}>Deletar Playlist</button>
                        </div>
                    )
                })}

                
            </div>
        )
    }
}


