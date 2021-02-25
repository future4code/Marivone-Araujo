import React, {useState} from 'react';
import logo from '../assets/logo.jpeg';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useHistory} from "react-router-dom";
import useForm from '../hooks/useForm';
import { useUnprotectedPage } from '../hooks/useUnprotectedPage'
import { signUp } from "../services/labEddit";
import CircularProgress from "@material-ui/core/CircularProgress"

const LogoSignUp = styled.img`
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp({setRightButton}) {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(false)
  const [form, onChange, clearFields] = useForm({
    username: "",
    email: "",
    password: "",    
  });

  const history = useHistory()
  useUnprotectedPage()
  
  const onClickButton = (event) => {
    event.preventDefault();
    signUp(form, clearFields, history, setRightButton, setIsLoading)   
  }  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <LogoSignUp src={logo}/>
    
    
        <form onSubmit={onClickButton} className={classes.form} noValidate>
          <Grid container spacing={2}>

            <Grid item xs={12}>              
              <TextField
                autoComplete="fname"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nome"
                autoFocus

                value={form.username} 
                onChange={onChange}
                required

              />
            </Grid>
           
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"

                value={form.email} 
                onChange={onChange}
                required 
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
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
            </Grid>
            <Grid item xs={12}>
             
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
          {isLoading?
          <CircularProgress size={24}/>
          : <>Cadastre-se</>}
  
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}