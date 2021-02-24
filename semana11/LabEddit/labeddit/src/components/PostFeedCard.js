import React, { useState, useEffect } from 'react'
import axios from "axios"
import { SECOND_BASE_URL } from "../constants/urls";
import AllFeedCard from "../components/AllFeedCard";
 

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

        {posts && posts.map((post) =>{
          return(
          <div>
            <AllFeedCard               
              username = {post.username} 
              text = {post.text}
              votesCount = {post.votesCount}
              commentsCount = {post.commentsCount}

              onClick={() => null}
    

              />
          </div>
   
          )
        })}
   
      </div>
  );
}

export default PostFeedCard;


