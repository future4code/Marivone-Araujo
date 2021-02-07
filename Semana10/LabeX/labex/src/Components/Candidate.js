// import axios from 'axios'
import React from 'react'


function Candidate (props) {


  // const decideCandidate = (approve) =>{

  //   const body = {
      
  //       approve: approve      
  //   }

  //   axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/marivone-araujo-epps/trips/${props.tripId}/candidates/${props.candidate.id}/decide`, body,{
  //     headers: {
  //       auth: localStorage.getItem('token')
  //     }
  //   }).then((res) =>{
  //     alert("Sucesso")
  //     console.log(res)
  //   }).catch((err)=>{
  //     console.log(err)
  //   })
  // }

  const approveCandidate = () =>{
    // console.log("APROVA")
    props.decideCandidate(true, props.candidate.id)
  }

  const rejectCandidate = () =>{
    // console.log("REJEITA")
    props.decideCandidate(false, props.candidate.id)
  }

  return (   
    <div>       
      <p></p>          
        <div><i><strong>Nome:</strong> {props.candidate.name}</i> </div>
        <div><i><strong>Idade:</strong> {props.candidate.age}</i> </div>
        <div><i><strong>Profissão:</strong> {props.candidate.profession}</i> </div>
        <div><i><strong>País:</strong> {props.candidate.country}</i></div>
        <div><i><strong>Texto:</strong> "{props.candidate.applicationText}"</i></div>
        <button
          onClick={approveCandidate}
        >Aprova</button>
        <button
          onClick={rejectCandidate}       
        >Não Aprova</button>
        

    </div>
  )
}

export default  Candidate;




