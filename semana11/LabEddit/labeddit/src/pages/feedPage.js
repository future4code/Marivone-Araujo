import React from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";
import WritePostCard from "../components/WritePostCard"
import ComentCard from "../components/ComentCard";




function FeedPage() {
  useProtectedPage()


  return (
    <div>

      <WritePostCard/>
      <ComentCard />

    </div>
  );
}

export default FeedPage;
