import React, {useState} from "react"
import styled from "styled-components"
import axios from "axios"
import { BASE_URL} from "../constants/urls";
import { SECOND_BASE_URL} from "../constants/urls";
import AllFeedCard from "../components/AllFeedCard";
import useProtectedPage from "../hooks/useProtectedPage";
import useRequestData from "../hooks/useRequestData";
import {useHistory} from "react-router-dom";
import { goToPostPage } from "../Routes/Coordinator";
import Loading from "../components/Loading";

const PostsCardsContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr;
`

function PostFeedCard(props) {
  useProtectedPage()
  const history = useHistory()
  const posts = useRequestData([],`${BASE_URL}/posts`)
  const [vote, setVote] = useState(0) 
  
  const onClickCard = (id) =>{
    goToPostPage(history, id)
  }   

  const onClickVote = (id) =>{
    putVote(id, 1)
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
    .then((res) =>{console.log(res.data)
      alert ("Voto cadastrado")
      setVote(res.data)
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

        onClick={()=>onClickCard(post.id)}

        id={post.id}
        putVote = {onClickVote}
       
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


