import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import axios from "axios"
import { SECOND_BASE_URL } from "../constants/urls";
 
const ComentPostCard = styled.div`
border: 1px solid black;
margin: 20px;
width: 400px;
text-align: center;
` 

function PostFeedCard() {
  const [posts, setPosts] = useState([])


    useEffect (() => {
    axios.get (`${SECOND_BASE_URL}`, {
      headers:{
      Authorization: localStorage.getItem("token")
      }
    })
    .then((res) =>{
      setPosts(res.data.posts)
      console.log(res.data.posts)
    })
    .catch((err) =>{
          console.log(err)
          alert ("Aconteceu um probleminha..." + err)
        })
  }, [])

  return (
      
    <div>
      <div>

        {posts && posts.map((post) =>{
          return(
            <ComentPostCard>
              <h3>{post.username}</h3>
              <hr/>
              <div>{post.text}</div>
              <hr/>
              <div>{post.commentsCount} Comentários</div>
              <hr/>
              <div>{post.votesCount} Votes</div>
            </ComentPostCard>     
          )
        })}

      </div>
    
</div>
  );
}

export default PostFeedCard;


