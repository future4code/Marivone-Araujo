import React from "react";
import styled from "styled-components";
import Typography from '@material-ui/core/Typography';
import { useProtectedPage } from "../hooks/useProtectedPage";
import WritePostCard from "../components/WritePostCard"
import PostFeedCard from "../components/PostFeedCard";

const ContainerFeed = styled.div`
margin-top: 30px;
`

function FeedPage() {
  useProtectedPage()

  return (
    <div>
        <Typography 
          variant="h5" component="h2">            
        </Typography>              
      <WritePostCard/>
      
      <ContainerFeed>
        <PostFeedCard/>
      </ContainerFeed>
    </div>
  );
}

export default FeedPage;
