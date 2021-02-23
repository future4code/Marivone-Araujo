import axios from 'axios'
import { SECOND_BASE_URL } from "../constants/urls";


export const postOnFeed = (body, clearFields) => {

    axios.post(`${SECOND_BASE_URL}`, body,{
        headers:{
        Authorization: localStorage.getItem("token")
      }
    })
    .then((res) =>{
      console.log(res.data)
      alert ("Post cadastrado")
      clearFields();

    })
    .catch((err) =>{
        console.log(err)
        alert (err.message)
    })
  };