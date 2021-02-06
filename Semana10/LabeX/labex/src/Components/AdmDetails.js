import React, { useState, useEffect } from 'react'
import styled from 'styled-components'


const MainGrid = styled.div`
margin-left: 950px;
margin-right: 20px;
position: absolute;
`

function AdmDetails( viagens, candidatos) {

  console.log(viagens)
  return (   

    <MainGrid>

      <div>
      
      <p></p>
  
        <div><strong>Dados da viagem:</strong></div>
        <p></p>
        <div><i>Name:</i>  "{viagens.viagens.name}"</div>
        <div><i>Planet:</i>  {viagens.viagens.planet}</div>
        <div><i>Duration:</i>  {viagens.viagens.durationInDays}</div>
        <div><i>Date:</i>  {viagens.viagens.date}</div>  
        <div><i>Description:</i>  "{viagens.viagens.description}"</div>
  
  {viagens.candidatos.map((trip) => {
      return (  
       <div>
  
      <p></p>
       <div><strong>Candidatos:</strong></div>
       <p></p>        
        <div>Name:{viagens.vianges.candidatos.name}</div>
        {/* <div>Age:{viagens.candidatos.age}</div> */}
        {/* <div>Profession:{viagens.candidatos.profession}</div>         */}
        {/* <div>Country:{viagens.candidatos.country}</div>    */}
        {/* <div>ApplicationText:{viagens.candidatos.applicationText}</div> */}
      </div>             
)})} 

 </div>
    </MainGrid>
  );
}

export default  AdmDetails;




