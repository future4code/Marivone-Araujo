import React, { useEffect } from 'react';
import  axios from "axios";
import {SECOND_BASE_URL} from "../constants/urls"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

const FeedCardContainer = styled.div`
margin: 10vh;
@media (min-width:500px) and (max-width: 800px) {
margin: 3vh;
};
@media (max-width: 499px) {
margin-left: 37px;
margin: 4vh;
}
`

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 140,
  },
});

export default function Comment(props) {
  const classes = useStyles();

  const putVote = (dir) =>{
    const body = {
      direction: dir
    }
    axios.put(`${SECOND_BASE_URL}/${props.postId}/comment/${props.commentId}/vote`, body,{
      headers:{
      Authorization: localStorage.getItem("token")
    }
  })
  .then((res) =>{
    console.log(res)
    alert ("Voto cadastrado")
  })
  .catch((err) =>{
    console.log(err)
    alert (err.message)
  })
  };
  
  return (
    <FeedCardContainer>
    <Card className={classes.root}    
    onClick={props.onClick}    
    >
      <CardActionArea>       
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">            
          {props.username}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.text}
          </Typography>
        </CardContent>      
      </CardActionArea>
      <CardActions>      
      <ArrowDropUpIcon 
        fontSize="large" 
        color="primary"
        onClick={()=>putVote(1)}
      />
        <div>{props.votesCount}</div>
        <ArrowDropDownIcon 
        fontSize="large" 
        color="primary"
        onClick={()=>putVote(-1)}
        />      
      </CardActions>
    </Card>
    </FeedCardContainer>
  );
}








