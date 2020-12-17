import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {

    state = {
      posts: [
    {
      nome:"paulinha",
      foto:"https://picsum.photos/50/50",
      fotoPost:"https://picsum.photos/200/150"
    },

    {
      nome:"Ana Clara",
      foto:"https://picsum.photos/51/54",
      fotoPost:"https://picsum.photos/201/154"
    },

    {
      nome:"Solange",
      foto:"https://picsum.photos/52/57",
      fotoPost:"https://picsum.photos/202/157"
    }          
  ]
  }

  novoPost = this.state.posts.map ((post) =>{
    return(
      
      <div><p>{post.nome}</p> <img src={post.foto}></img> <img src={post.fotoPost}></img></div>  
      
    )

  })

  render() {
    return(
      <div className={`app-container`}>
        <div>{this.novoPost}</div>
      </div>
      )      
  }
}

export default App;

