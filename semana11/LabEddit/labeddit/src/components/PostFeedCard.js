import React, {useState} from "react"
import axios from "axios"
import { BASE_URL} from "../constants/urls";
import { SECOND_BASE_URL} from "../constants/urls";
import AllFeedCard from "../components/AllFeedCard";
import useProtectedPage from "../hooks/useProtectedPage";
import useRequestData from "../hooks/useRequestData";
import {useHistory} from "react-router-dom";
import { goToPostPage } from "../Routes/Coordinator";
import Loading from "../components/Loading";
import {PostsCardsContainer} from '../styled/styled'


function PostFeedCard(props) {
  useProtectedPage()
  const history = useHistory()
  const posts = useRequestData([],`${BASE_URL}/posts`)
  const onClickCard = (id) =>{
    goToPostPage(history, id)
  }   
  const putVote = (id, dir) =>{
      const body = {
        direction: dir
      }
      axios.put(`${SECOND_BASE_URL}/${id}/vote`, body,{
        headers:{
        Authorization: localStorage.getItem("token")
      }
    })
    .then((res) =>{
      console.log(res)
      alert ("Voto cadastrado")
    })
    .catch((err) =>{console.log(err)
      alert (err.message)
    })
    };

    const postsCards = posts.posts && posts.posts.map((post) =>{
    return(
      <AllFeedCard        
        key = {post.id}       
        username = {post.username} 
        text = {post.text}
        votesCount = {post.votesCount}
        commentsCount = {post.commentsCount}
        userVoteDirection = {post.userVoteDirection}
        goToPostDetail = {onClickCard}
        id={post.id}
        putVote = {putVote}
        />
    )
  })  
  return (      
      <PostsCardsContainer>                
        {postsCards && postsCards.length > 0 ? postsCards : <Loading /> }  
      </PostsCardsContainer>   
  );
}
export default PostFeedCard;


