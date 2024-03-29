import React from "react";
import PostCreate from "./Components/PostCreate";
import PostList from "./Components/PostList";

const App = () => {
  return (
    <div className="container">
      <h1>Create a Post</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
};

export default App;
