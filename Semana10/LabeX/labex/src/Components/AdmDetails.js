import React, { useState, useEffect } from 'react'
import axios from "axios"


function AdmDetails(props) {
  const [trip, setTrip] = useState({})

  const getTripDetail = (trip) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/marivone-araujo-epps/trip/${trip}`, {
      headers: {
        auth: localStorage.getItem("token")
      }
    })
    .then(response => setTrip(response.data))
    .catch(err => console.log(err))
};

useEffect(() =>{
    getTripDetail()
  })
  useEffect(() =>{
    if (trip !== props.trip) {
      getTripDetail(props.trip);
    }
  }, [props.trip])


  return (
    < div>

    <hi>{trip.name}</hi>
    Oi
    
    </div>
  );
}

export default  AdmDetails;




