import {useState, useEffect} from "react"

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    let posts = await fetch(`https://jsonplaceholder.typicode.com/posts`)
     .then((response) => {
       return response;
     })
     .catch((err) => {
       return err;
     });

     setPosts(await posts.json());
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h2>Posts</h2>

      {posts.slice(0, 10).map((user) =>{
        return <p key={name}>{user.title}</p>;
      })}
    </div>
  )
}
