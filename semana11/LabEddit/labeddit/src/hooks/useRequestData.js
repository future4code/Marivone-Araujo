import React, { useState, useEffect } from 'react'
import axios from "axios"


const useRequestData = (initialData, url) => {

    const [posts, setPosts] = useState(initialData)


    useEffect (() => {
    axios.get (url, {
      headers:{
      Authorization: localStorage.getItem("token")
      }
    })
    .then((res) =>{
      setPosts(res.data)
      // console.log(res.data)
    })
    .catch((err) =>{
          // console.log(err)
          alert ("Aconteceu um probleminha..." + err)
        })
  }, [url])

    return (posts)
}

 export default useRequestData