import React, { useState } from 'react';
import logo from '../assets/logo.jpeg';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useHistory} from "react-router-dom"
import useForm from '../hooks/useForm'
import {goToRegisterPage} from "../Routes/Coordinator"
import { login } from "../services/labEddit";
import { useUnprotectedPage } from '../hooks/useUnprotectedPage';
import CircularProgress from '@material-ui/core/CircularProgress'

const LogoImg = styled.img`
width: 70vh;
max-width: 350px;
`

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function SignIn({setRightButton}) {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState (false)

  const [form, onChange, clearFields] = useForm({
    email: "",
    password: "",    
  });
  const history = useHistory()
  useUnprotectedPage()

  const onClickButton = (event) => {
    event.preventDefault();
    clearFields();    
    login (form, clearFields, history, setRightButton, setIsLoading)
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
    
      <LogoImg src={logo}/>   
    
        <form onSubmit={onClickButton} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={form.email} 
            onChange={onChange}
            required 

          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"

            value={form.password} 
            onChange={onChange}
            title={"A senha deve ter no mínimo 3 caracteres"}
            pattern={"^.{3,}"}
            required
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
           {isLoading?
           
           <CircularProgress size={24}/>
           
           : <>Login</>}
          </Button>
          
        </form>

          <Button
            color="primary"
            onClick={() => goToRegisterPage(history)}
          >
            Não possui cadastro? Cadastre-se
          </Button>


      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}