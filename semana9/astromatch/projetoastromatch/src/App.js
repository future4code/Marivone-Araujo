import React, { useEffect, useState } from 'react'
import OkMatch from './Components/OkMatch'
import Home from './Components/Home'


export default function Astromatch() {

  const [yesMatch, setYesMatch] = useState(false)
  
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
    </div>    
  );
}






