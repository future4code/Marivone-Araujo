import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ProfilePicture from '../src/img/marivone.jpg'
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemContatos from '../src/img/email.png'
import ImagemEndereco from '../src/img/endereco.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {ProfilePicture}
          nome="Marivone Araújo" 
          descricao="Oi, eu sou Marivone Araújo. Estou em transição de carreira e pretendo me tornar Desenvolvedora Web Fullstack muito em breve."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Curso de formação para Desenvolvedor Web Fullstack." 
        />
        
        <CardGrande 
          imagem="https://blog-static.infra.grancursosonline.com.br/wp-content/uploads/2018/05/28191654/aracaju-se.jpg" 
          nome="Câmara Municipal de Vereadores de Aracaju" 
          descricao="Assessora de Comunicação do mandato político da vereadora Rosangela Santana (PT)" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>


      <p className="page-section-container">
        <h2>Contatos</h2>
        <CardPequeno 
          imagem= {ImagemContatos}
          email="E-mail: marivone.vieira@gmail.com" 
           
        />

        <CardPequeno 
          imagem= {ImagemEndereco}
          endereco="Endereço: Av. Marieta Leite, 64. Cond. Iha Bella. Aracaju/SE." 
        />

      </p>


    </div>
  );
}

export default App;
