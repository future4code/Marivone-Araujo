import React from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";
import WritePostCard from "../components/WritePostCard"
import PostFeedCard from "../components/PostFeedCard";
import {ContainerFeed} from '../styled/styled'

function FeedPage() {
  useProtectedPage()

  return (
    <div>           
      <WritePostCard/>
      <ContainerFeed>
        <PostFeedCard/>
      </ContainerFeed>
    </div>
  );
}

export default FeedPage;
