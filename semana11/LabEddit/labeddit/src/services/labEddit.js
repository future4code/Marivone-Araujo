import axios from 'axios'
import { BASE_URL } from "../constants/urls";
import { goToFeedPage } from "../Routes/Coordinator";


export const login = (body, clearFields, history,  setRightButton, setIsLoading) =>{
  setIsLoading(true)
    // console.log(body)
    axios.post(`${BASE_URL}/login`, body)
    .then((res) =>{
      localStorage.setItem("token", res.data.token)
      clearFields()
      setIsLoading(false)
      goToFeedPage(history)
      setRightButton("Logout")      
      alert("Logado com sucesso")
    }).catch((err) =>{
      setIsLoading(false)
      alert (err.response.data.message)
    })
  }


 export const signUp = (body, clearFields, history, setRightButton, setIsLoading) =>{
  setIsLoading(true)
    axios.post(`${BASE_URL}/signup`, body)
        .then((res) =>{
          localStorage.setItem("token", res.data.token)
          clearFields()
          setIsLoading(false)
          goToFeedPage(history)
          setRightButton("Logout")
          alert("Cadastrado com sucesso")
        }).catch((err) =>{
          setIsLoading(false)
          alert (err.message)
        })
    }