import React, { useState } from "react";
import { useSelector } from "react-redux";

import PostList from "../../components/post-list";

import "./Home.css";
import { postsSelector } from "../../redux/posts";

export default function Home() {
  const posts = useSelector(postsSelector);

  return (
    <div className="posts-container">
      <PostList posts={posts} />
    </div>
  );
}
