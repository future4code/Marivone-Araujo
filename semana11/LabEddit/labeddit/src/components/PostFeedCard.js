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

  const onClickVoteUp = (id) =>{
    putVoteUp(id)
  }

  const onClickVoteDown = (id) =>{
    putVoteDown(id)
  }
  
  const putVoteUp = (id) =>{
      const body = {
        direction: 1
      }
      axios.put(`${SECOND_BASE_URL}/${id}/vote`, body,{
        headers:{
        Authorization: localStorage.getItem("token")
      }
    })
    .then((res) =>{console.log(res.data.sucess)
      alert ("Voto cadastrado")
      setVote(res.data.sucess)
    })
    .catch((err) =>{console.log(err)
      alert (err.message)
    })
    };

    const putVoteDown = (id) =>{
      const body = {
        direction: -1
      }
      axios.put(`${SECOND_BASE_URL}/${id}/vote`, body,{
        headers:{
        Authorization: localStorage.getItem("token")
      }
    })
    .then((res) =>{console.log(res.data.sucess)
      alert ("Voto cadastrado")
      setVote(res.data.sucess)
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

        onClick={()=>onClickVoteUp(post.id)}
        onClick={()=>onClickVoteDown(post.id)}
       
        />
    )
  })  
  return (      
      <PostsCardsContainer>        
        {postsCards}
      </PostsCardsContainer>   
  );
}
export default PostFeedCard;


