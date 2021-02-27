import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import {FeedCardContainer} from '../styled/styled'
import CommentIcon from '@material-ui/icons/Comment'

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 140,
  },
});

export default function AllFeedCard(props) {
  const classes = useStyles();

  return (
    <FeedCardContainer>
    <Card 
    // className={classes.root}        
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
        <ExpandLessIcon
           size="small" 
           color="primary"
           onClick={()=>props.putVote(props.id, 1)}
        />
        <div>{props.userVoteDirection}</div>      
        <ExpandMoreIcon 
        size="small" 
        color="primary"        
        onClick={()=>props.putVote(props.id, -1)}        
        />        

        {!props.hideComment && (
        <Button size="small" 
        color="primary"
        startIcon = {<CommentIcon />}
        onClick = {()=>props.goToPostDetail(props.id)}>
        {props.commentsCount} Comente 
        </Button>)}

      </CardActions>
    </Card>
    </FeedCardContainer>
  );
}








