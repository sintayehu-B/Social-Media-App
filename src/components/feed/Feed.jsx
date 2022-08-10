import { useEffect, useState } from "react";
import Post from "../Posts/Post"
import Share from "../share/Share"
import "./feed.css"
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export default function Feed({username}) {
  const [posts, setPosts] = useState([]);
  const {user} = useContext(AuthContext);

  useEffect(()=>{
    const fetchPosts = async() => {
      // 
      const res = username ? await axios.get("/posts/profile/" + username) : await axios.get("posts/timeline/" + user._id);
      // console.log(res.data);
      setPosts(res.data.sort((a,b)=>{
        return new Date(b.createdAt) - new Date(a.createdAt)}));
      
    }
    fetchPosts();
  },[username, user._id])
  return (
    <div className="feedContainer">
      <div className="feedWrapper">
        <Share/>
      {posts.map((p)=>(
        
        <Post key={p._id} post={p}/>
        ))}
      </div>
    </div>
  )
}
