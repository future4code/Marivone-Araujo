import styled  from "styled-components";
import React from "react";
import error from "../assets/erro.jpg"
import Typography from "@material-ui/core/Typography"

const ErrorPageBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 20px;
`
const ErrorImg = styled.img`
width: 64vw;
max-width: 400px;
`

function ErrorPage() {
  return (
    <ErrorPageBox>      
      <ErrorImg src={error}/>
        <Typography component="h1" variant="h5" align={'center'}>
         ERRO 404 - Página não encontrada
        </Typography>

    </ErrorPageBox>
  );
}

export default ErrorPage;
