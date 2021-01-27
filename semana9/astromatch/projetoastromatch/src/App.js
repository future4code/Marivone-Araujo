import React, { useEffect, useState } from 'react'
// import styled from 'styled-components'
import OkMatch from './Components/OkMatch'
import Home from './Components/Home'



export default function Astromatch() {
  // const [page, setPage] = useState(true)
  const [yesMatch, setYesMatch] = useState(false)

  // const goScreen =() =>{
      // setPage (!page)
  // }

  const stayHome = () => {
    setYesMatch (true)
  }
  
  const changeToMatch = () => {
    setYesMatch (false)
  }

  const setScreen =() =>{
    if (yesMatch){
      return (
        <OkMatch changeToMatch = {changeToMatch}></OkMatch>
      ) 
    }else{
      return(
        <Home stayHome = {stayHome}></Home>
)}}

useEffect(() =>{
  setScreen()
})

  return (  
    <div>      
      <div>{setScreen()}</div>
      <div>
        {/* {page? <Home/>:<OkMatch />} */}
        {/* <button onClick={goScreen}>Trocar página</button> */}        
      </div>    
    </div>    
  );
}






