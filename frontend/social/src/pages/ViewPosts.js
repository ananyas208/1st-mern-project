import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './Viewposts.css';
// import './PostsPage.css';
import { useNavigate } from 'react-router-dom';
function Post() {
  const [posts, setPosts] = useState([]);
  const [login, setLogin] = useState(false);
  const navigate=useNavigate();
  useEffect(() => {
    if(localStorage.getItem("jwtToken")){
      (async()=>{
        try{
          const response = await axios.get("http://localhost:3000/posts", {
            headers: {
                authorization: localStorage.getItem("jwtToken")
            }
          })

          console.log(response)
          console.log("hhhe");
          setPosts(response.data);
        }
        catch(error){
          console.log(error);
        }
      })()
      setLogin(true);
  }
  else{
    setLogin(false);
  }
  }, []);

  return (
    <div className='whole'>
        {!login && <h1 className='text-center font-bold text-xl'>Please Login First</h1>}
        {login &&
            <div className="post-container">
             
                {posts.map((post) => (
                <div key={post._id} className="post-card">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
                ))}
            </div>
        }
    </div>
  );
}

export default Post;