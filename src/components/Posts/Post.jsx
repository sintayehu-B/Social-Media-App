import "./post.css"
import { MoreVertSharp } from '@mui/icons-material';

import { useEffect,useState } from "react";
import axios from "axios";
// import * as timeAgo from "timeago.js"
import moment from "moment";
import {Link } from "react-router-dom"
export default function Posts({post}) {

  const [like ,setLike] = useState(post.likes.length) 
  const [isLiked ,setIsLiked] = useState(false)
  const [user ,setUser] = useState({})
  const  pf = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(()=>{
    const fetchUsers = async() => {

      const res =await axios.get(`/users?userId=${post.userId}`)
     
      setUser(res.data);
      
    }
    fetchUsers();
  },[post.userId])
  const likeHandler = () =>{
    setLike( isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="postTop">
             <div className="postTopLeft">
              <Link to={`profile/${user.username}`}>

                <img src={user.profilePicture || pf+"Person/avatar.png"} alt="" className="postProfileImage" />
              </Link>
                <span className="postUserName"> {user.username}</span>
                <span className="postDate"> {moment(post.createdAt).fromNow()}</span>
             </div>
             <div className="postTopRight">
                <MoreVertSharp className="postIcon"/>
             </div>
        </div>
        <div className="postCenter">
            <span className="postText">
               {post.description}
            </span>
            <img src={pf+post.image} alt="" className="postCenterImage" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img src={`${pf}like.png`} alt="" onClick={ likeHandler} className="postLikeButton" />
                <img src={`${pf}hearts.png`} alt="" onClick={ likeHandler} className="postLikeButton" />
                <span className="postLikeCounter">{like} People liked it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText"> {post.comment} Comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}
