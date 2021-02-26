import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useForm from '../hooks/useForm'
import { commentOnFeed } from "../services/posts";
import {BoxWrite} from '../styled/styled'


function CommentOnFeed(props) {    
  const [form, onChange, clearFields] = useForm({
    text: "",
});

  const onClickButton = (event) => {
    event.preventDefault();
    commentOnFeed(form, clearFields, props.id)
  }
  return (    
      <BoxWrite onSubmit={onClickButton}>          
        <form>
            <TextField      
                margin="normal"
                id="outlined-multiline-static"
                label="Escreva seu comentário"
                multiline
                rows={6}        
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
            Comentar
          </Button>          
        </form>
      </BoxWrite>
  );
}

export default CommentOnFeed;
