import React from "react";
import error from "../assets/erro.jpg"
import Typography from "@material-ui/core/Typography"
import {ErrorPageBox, ErrorImg} from '../styled/styled'

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
