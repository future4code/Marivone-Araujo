import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components"

const FeedCardContainer = styled.div`
margin: 20px;
`

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <FeedCardContainer>
    <Card 
    className={classes.root}    
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

        // onCLick={}

        >
        VotarUp
        </Button>

        <div>{props.userVoteDirection}</div>        


        <Button size="small" color="primary">
        VotarDown
        </Button>



        {/* <div>{props.votesCount} Votos </div> */}
        <Button size="small" color="primary">
        {props.commentsCount} Comentários
        </Button>      
      </CardActions>
    </Card>
    </FeedCardContainer>
  );
}








