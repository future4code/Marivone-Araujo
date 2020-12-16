import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Ana Clara'}
          fotoUsuario={'https://picsum.photos/51/54'}
          fotoPost={'https://picsum.photos/201/154'}
        />

        <Post
          nomeUsuario={'Solange'}
          fotoUsuario={'https://picsum.photos/52/57'}
          fotoPost={'https://picsum.photos/202/157'}
        />
      </div>
    );
  }
}

export default App;
