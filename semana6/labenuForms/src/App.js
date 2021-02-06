import React from 'react'
import Etapa1 from './components/Etapa1.js'
import Etapa2 from './components/Etapa2.js'
import Etapa3 from './components/Etapa3.js'
import Final from './components/Final.js'

export default class App extends React.Component {
    
  state = {
    etapa: 1,
  }

  irParaProximaEtapa = () =>{
    this.setState( { etapa: this.state.etapa + 1 }) 
    
  }
  renderizaEtapa = () => {    
    switch (this.state.etapa){
      case 1:
        return <Etapa1 />
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />      
      case 4:
        return <Final />
      default:
        return <div></div>
    }
  }  



  render(){
  return (
    <div className="App">      
      {this.renderizaEtapa()}
      <p>
      <button onClick = {this.irParaProximaEtapa}> Próxima etapa</button>
      </p>
    </div>
  )
}
}