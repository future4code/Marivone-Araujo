import React from 'react';
import './App.css';
import Post from './components/Post/Post';


class App extends React.Component {

    state = {
      posts: [
    {
      nomeUsuario:"paulinha",
      fotoUsuario:"https://picsum.photos/50/50",
      fotoPost:"https://picsum.photos/200/150"
    },

    {
      nomeUsuario:"Ana Clara",
      fotoUsuario:"https://picsum.photos/51/54",
      fotoPost:"https://picsum.photos/201/154"
    },

    {
      nome:"Solange",
      fotoUsuario:"https://picsum.photos/52/57",
      fotoPost:"https://picsum.photos/202/157"
    }          
  ]
  }


  render() {
    const novoPost = this.state.posts.map((post) => {
      return (
        <p>
        <Post 
        
        nomeUsuario = {post.nomeUsuario} 
        fotoUsuario = {post.fotoUsuario} 
        fotoPost = {post.fotoPost}/>
        
        </p>
      );
    });

    return (
      <div>      
        <div>{novoPost}</div>
      </div>
    );
  }
}


export default App;

