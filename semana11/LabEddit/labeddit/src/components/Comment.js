import React from 'react';
import { axios } from "axios";
import {SECOND_BASE_URL} from "../constants/urls"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components"

const FeedCardContainer = styled.div`
margin: 10vh;
`

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  
  const putVote = (id, commentId, dir) =>{
    const body = {
      direction: dir
    }
    axios.put(`${SECOND_BASE_URL}/${id}/comment/${commentId}/vote`, body,{
      headers:{
      Authorization: localStorage.getItem("token")
    }
  })
  .then((res) =>{console.log(res)
    alert ("Voto cadastrado")
  })
  .catch((err) =>{console.log(err)
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

        <Button 
        size="small" 
        color="primary"

        onClick={()=>putVote(props.id, props.commentId, 1)}

        >
        VotarUp
        </Button>        

        <div>{props.votesCount}</div>

        <Button 
        size="small" 
        color="primary"
        onClick={()=>putVote(props.id, props.commentId, -1)}
        >
        VotarDown 
        </Button>      
        
      </CardActions>
    </Card>
    </FeedCardContainer>
  );
}








