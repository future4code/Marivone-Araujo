import React, { useState, useEffect } from 'react'
import styled from 'styled-components'


const MainGrid = styled.div`
margin-left: 950px;
margin-right: 20px;
position: absolute;
`

function AdmDetails( viagens) {

  
  console.log(viagens.candidatos)
  
  return (   

    <MainGrid>

      <div>
      
      <p></p>
  
        <div><strong>Detalhes da viagem:</strong></div>
        <p></p>
        <div><i><strong>Nome:</strong></i> <strong> "{viagens.viagens.name}"</strong></div>
        <div><i>Planeta:</i>  {viagens.viagens.planet}</div>
        <div><i>Duração:</i>  {viagens.viagens.durationInDays}</div>
        <div><i>Data:</i>  {viagens.viagens.date}</div>  
        <div><i>Descrição:</i>  {viagens.viagens.description}</div>

<hr/>
  {viagens.candidatos  && viagens.candidatos.map((trip) => {
    return (   
       <div>  
      <p></p>
    
       <div><strong><i>Candidato:</i></strong></div>
       <p></p>        
        <div><i>Nome:</i> {trip.name}</div>
        <div><i>Idade:</i> {trip.age}</div>
        <div><i>Profissão:</i> {trip.country}</div>
        <div><i>País:</i> {trip.profession}</div>
        <div><i>Texto:</i> {trip.applicationText}</div>

        
      </div>             
)})}

 </div>
    </MainGrid>
  );
}

export default  AdmDetails;




