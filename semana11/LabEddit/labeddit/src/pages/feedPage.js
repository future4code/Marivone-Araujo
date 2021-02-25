import React from "react";
import styled from "styled-components";
import Typography from '@material-ui/core/Typography';
import { useProtectedPage } from "../hooks/useProtectedPage";
import WritePostCard from "../components/WritePostCard"
import PostFeedCard from "../components/PostFeedCard";

const ContainerFeed = styled.div`
margin-top: 30px;
`
const TitleFeedPage = styled.div`
margin: 40px;
box-shadow: 5px 5px 5px gray;
text-align: center;
background-color: beige;
padding: 5px;
`

function FeedPage() {
  useProtectedPage()

  return (
<div>
      <TitleFeedPage> 
        <Typography 
          variant="h5" component="h2">            
          Popular posts
        </Typography>        
      </TitleFeedPage>
      
      <WritePostCard/>
      
      <ContainerFeed>
        <PostFeedCard/>
      </ContainerFeed>
</div>
  );
}

export default FeedPage;
