import React, {useState} from 'react'
import useForm from '../hooks/useForm'
import styled from 'styled-components'
// import axios from 'axios';

const CreateTripForm = styled.div`
font-family: monospace;
margin-left: 500px;
`

function CreateTripPage() {
  
  const [form, onChange, clearFields] = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const onClickButton = (event) => {
    event.preventDefault();
    console.log(form);
    clearFields();

    // axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/marivone-araujo-epps/trips", body,{
    //   headers:{
    //     auth: localStorage.getItem("token")
    //   }
    // })
    // .then((res) =>{
    //   console.log(res.data.trip)

    // })
    // .catch((err) =>{
    //     console.log(err)
    // })

  };


  
  return (
    <div>
       
    <CreateTripForm>

      <h1>Crie uma viagem:</h1>
      <label for="name">Nome:</label>
      

      <form onSubmit={onClickButton}> 
      
      <p><input 
      type="text"    
      id="name"      
      name="name"
      value={form.name}
      onChange={onChange}
      placeholder="Nome"
      required
      pattern={"^.{5,}"}
      title={"O nome deve ter no mínimo 5 caracteres"}
      
        
      /></p>


      <label for="planeta">Planeta:</label>
      <p><select 
      id="planeta"      
      type="select"                 
      name="planet"
      value={form.planet}
      onChange={onChange}
      placeholder="planeta"
      required            
      >
        <option>Mercúrio</option>
        <option>Vênus</option>
        <option>Terra</option>
        <option>Marte</option>
        <option>Júpiter</option>
        <option>Saturno</option>
        <option>Urano</option>
        <option>Netuno</option>
      </select></p>

      
      <label for="date">Data (dias):</label>
      <p><input 
      type="date"
      id="date"      
      name="date"
      value={form.date}
      onChange={onChange}
      required
      /></p>
     
      <label for="descricao">Descrição:</label>
      <p><textarea 
      type="text" 
      id="descricao"                   
      name="description"
      value={form.description}
      onChange={onChange}
      placeholder="Descrição"
      required
      pattern={"^.{30,}"}
      title={"O texto deve ter no mínimo 30 letras"}
      /></p>

      <label for="duration">Duração (Dias):</label>
      <p><input 
      type="number" 
      min={50}
      id="duration"    
      name="duration"
      value={form.duration}
      onChange={onChange}
      placeholder="Duração"
      required
     
      /></p>

      <button>Criar Viagem</button>
    
    </form>     
      
    </CreateTripForm>

    </div>
  );
}
  
export default CreateTripPage;
