import { useEffect, useState } from "react"
import { Post } from "../Post"


const IndexPage = () => {
  const [posts, setPosts] = useState([]);



  useEffect(()=>{
    fetch('https://mern-blog-agam.onrender.com/post').then(response=>{
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  },[]);
  return (
    <>
        {/* <h2 className="description">PerceptivePages is a secure fullstack blogging service with user authentication. Create engaging blog posts in an intuitive environment while ensuring your data's safety. Elevate your blogging experience with ease.</h2> */}
        {posts.length > 0 && posts.map(post => (
          <Post {...post}/>
        ))}
    </>
  )
}

export default IndexPage