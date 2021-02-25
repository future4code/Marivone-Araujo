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

const TitlePostPage = styled.div`
margin: 30px;
box-shadow: 5px 5px 5px gray;
text-align: center;
background-color: beige;
padding: 5px;
`
const ContainerPostComments = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr;
`

function PostPage(id) {
  useProtectedPage()

  const params = useParams()
  const post = useRequestData({},`${BASE_URL}/posts/${params.postId}`) 
  const dialog = useRequestData([],`${BASE_URL}/posts/${params.postId}`) 
  

  const postComments = dialog && dialog.post && dialog.post.comments.map((comment) =>{
    return(
    <div>
      <Comment           
        key = {comment.id}       
        username = {comment.username} 
        text = {comment.text}
        votesCount = {comment.votesCount}               
        />
    </div>
    )
  })

  return (
    <div>
      <TitlePostPage> 
      <Typography 
       variant="h5" component="h2">            
       Detalhes do Post
      </Typography>
      </TitlePostPage>


      <AllFeedCard 
      key = {post.id}       
      username = {post && post.post && post.post.username} 
      title = {post && post.post && post.post.title}
      text = {post && post.post && post.post.text}
      userVoteDirection =  {post && post.post && post.post.userVoteDirection}
          // votesCount = {post && post.post && post.post.votesCount}
      commentsCount = {post && post.post && post.post.commentsCount}
      />
      <PostCommentCard id = {post && post.post && post.post.id}/>
      
      <ContainerPostComments>

      {postComments && postComments.length > 0 ? postComments : <Loading /> }  

      </ContainerPostComments>

    </div>
  );
}

export default PostPage;
