import React from "react";
import styled from "styled-components"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useForm from '../hooks/useForm'


const BoxWrite = styled.div`
border: 1px solid lightgray;
margin-left: 40vw;
margin-top: 10px;
width: 300px;
text-align: center;
padding: 10px;
` 

function WritePost() {

    
  const [form, onChange, clearFields] = useForm({
    text: "",
    title: "",        
  });



  const onClick = (event) => {
    event.preventDefault();
    // post(form, clearFields)   
  }  









  return (
    
      <BoxWrite>          
        <form onSubmit={onClick}>
            <TextField
                 margin="normal"
                label="Título do post"          
                //   value={value}
                //   onChange={handleChange}        
            />    
        
            <TextField      
                 margin="normal"
                 id="outlined-multiline-static"
                label="Escreva seu post"
                multiline
                rows={6}
                variant="outlined"
            />
            <br/>
            <Button
                variant="contained"
                color="primary"
                // onClick={() => goToRegisterPage(history)}
            >
                Postar
            </Button>
        </form>
      </BoxWrite>

  );
}

export default WritePost;
