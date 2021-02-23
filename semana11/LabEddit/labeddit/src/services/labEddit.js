import axios from 'axios'
import { BASE_URL } from "../constants/urls";
import { goToFeedPage } from "../Routes/Coordinator";


export const login = (body, clearFields, history,  setRightButton) =>{

    console.log(body)

    axios.post(`${BASE_URL}/login`, body)
    .then((res) =>{
      localStorage.setItem("token", res.data.token)
      clearFields()
      goToFeedPage(history)
      setRightButton("Logout")
      alert("Logado com sucesso")
    }).catch((err) =>{
      alert (err.response.data.message)
    })
  }


 export const signUp = (body, clearFields, history, setRightButton) =>{
    axios.post(`${BASE_URL}/signup`, body)
        .then((res) =>{
          localStorage.setItem("token", res.data.token)
          clearFields()
          goToFeedPage(history)
          setRightButton("Logout")
          alert("Cadastrado com sucesso")
        }).catch((err) =>{
          alert (err.message)
        })
    }