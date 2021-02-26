import React from "react";
import styled from "styled-components"
import Typography from '@material-ui/core/Typography';
import { useProtectedPage } from "../hooks/useProtectedPage";
import AllFeedCard from "../components/AllFeedCard"
import { useParams } from "react-router-dom";
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/urls";
import Comment from "../components/Comment";
import PostCommentCard from "../components/PostCommentCard";
import Loading from "../components/Loading";


const ContainerPostComments = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`

function PostPage(id) {
  useProtectedPage()
  const params = useParams()
  const post = useRequestData({},`${BASE_URL}/posts/${params.postId}`) 

  console.log(post)

  const postComments = post && post.post && post.post.comments.map((comment) =>{

  console.log(comment)

    return( 
    <div>
      <Comment           
        key = {comment.id}       
        username = {comment.username} 
        text = {comment.text}
        votesCount = {comment.votesCount}           
        commentId = {comment.id}  
        postId={post.post.id}
        />
    </div>
    )
  })

  return (
    <div>
       
      <Typography 
       variant="h5" component="h2">            
      </Typography>      

      <AllFeedCard 
      key = {post && post.post && post.post.id}    
      // postId = {post && post.post && post.post.id}       
      username = {post && post.post && post.post.username} 
      title = {post && post.post && post.post.title}
      text = {post && post.post && post.post.text}
      userVoteDirection =  {post && post.post && post.post.userVoteDirection}
      commentsCount = {post && post.post && post.post.commentsCount}
      />
      <PostCommentCard 
      id = {post && post.post && post.post.id}
      // postId = {post && post.post && post.post.id}            
      />      
      <ContainerPostComments>
      {postComments && postComments.length > 0 ? postComments : <Loading /> }  
      </ContainerPostComments>

    </div>
  );
}

export default PostPage;