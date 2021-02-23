import React from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";
import WritePostCard from "../components/WritePostCard"
import PostFeedCard from "../components/PostFeedCard";




function FeedPage() {
  useProtectedPage()


  return (
    <div>

      <WritePostCard/>
      <PostFeedCard />

    </div>
  );
}

export default FeedPage;
