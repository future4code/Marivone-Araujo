import React from "react";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useForm from '../hooks/useForm'
import { postOnFeed } from "../services/posts";

const BoxWrite = styled.div`
border: 1px solid lightgray;
margin-left: 40vw;
margin-top: 5vw;
width: 50vh;
text-align: center;
padding: 10px;
` 

function WritePost() {
    
  const [form, onChange, clearFields] = useForm({
    text: "",
    title: "",        
  });

  const onClickButton = (event) => {
    event.preventDefault();
    console.log(form);
    postOnFeed(form, clearFields)
  }
   
  return (    
      <BoxWrite>          
        <form onSubmit={onClickButton}>
            <TextField
                margin="normal"
                label="Título do post" 
                name="title"
                value={form.title}
                onChange={onChange}    
            />    
        
            <TextField      
                margin="normal"
                id="outlined-multiline-static"
                label="Escreva seu post"
                multiline
                rows={6}
                variant="outlined"              
                name="text"
                value={form.text}
                onChange={onChange}                
            />
            <br/>            
          <Button
            type="submit"
            variant="contained"
            color="primary"
            >            
            Postar
          </Button>          
        </form>
      </BoxWrite>

  );
}

export default WritePost;
