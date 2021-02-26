import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useForm from '../hooks/useForm'
import { postOnFeed } from "../services/posts";
import {BoxWritePost} from '../styled/styled'

function WritePost() {
    
  const [form, onChange, clearFields] = useForm({
    text: "",
    title: "",        
  });

  const onClickButton = (event) => {
    event.preventDefault();
    postOnFeed(form, clearFields)
  }
   
  return (    
      <BoxWritePost>          
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
                rows={10}      
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
      </BoxWritePost>

  );
}

export default WritePost;
