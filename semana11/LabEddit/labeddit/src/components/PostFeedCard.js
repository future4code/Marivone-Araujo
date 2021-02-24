import React from "react"
import { BASE_URL} from "../constants/urls";
import AllFeedCard from "../components/AllFeedCard";
import useProtectedPage from "../hooks/useProtectedPage";
import useRequestData from "../hooks/useRequestData";
import {useHistory} from "react-router-dom"
import { goToPostPage } from "../Routes/Coordinator";
 

function PostFeedCard(props) {
  useProtectedPage()
  const history = useHistory()
  const posts = useRequestData([], `${BASE_URL}/posts`)

  const onClickCard = (id) =>{
    goToPostPage(history, id)
  }
  

  const postsCards = posts.posts && posts.posts.map((post) =>{
    return(
    <div>
      <AllFeedCard        
        key = {post.id}       
        username = {post.username} 
        text = {post.text}
        votesCount = {post.votesCount}
        commentsCount = {post.commentsCount}

        onClick={()=>onClickCard(post.id)}
        />
    </div>
    )
  })
  
  return (      
      <div>        
        {postsCards}
      </div>
   
  );
}

export default PostFeedCard;


