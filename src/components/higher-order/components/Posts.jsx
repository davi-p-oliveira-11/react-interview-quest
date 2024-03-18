import {useState, useEffect} from "react"
import HigherOrder from "../HigherOrder";

function Posts() {
  return (
    <div>
      <h2>Posts</h2>

      {/*posts.slice(0, 10).map((user) =>{
        return <p key={name}>{user.title}</p>;
      }) */}
    </div>
  )
}

const PostsComp = HigherOrder("Posts");

export default PostsComp;