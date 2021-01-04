import React from 'react';


export function Etapa1() {
  return (
    <div className="Etapa1">

        <h1>ETAPA 1 - DADOS GERAIS </h1>
        <p> 1. Qual é o seu nome? </p>
          <input/> 
        <p> 2. Qual é a sua idade? </p>
          <input/>
        <p> 3. Qual é o seu e-mail? </p>
          <input/>
        <p> 4. Qual é a sua escolaridade? </p>
          
        <select> 

          <option>Ensino médio incompleto</option> 
          <option>Ensino médio completo</option> 
          <option>Ensino superior incompleto</option> 
          <option>Ensino superior completo</option>  
          
        </select>   
     
    </div>
  );
}

export default Etapa1;