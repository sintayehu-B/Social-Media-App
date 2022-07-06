import "./post.css"
import { MoreVertSharp } from '@mui/icons-material';
import {Users} from "../../dummyData"
import { useState } from "react";

export default function Posts({post}) {
  const [like ,setLike] = useState(post.like) 
  const [isLiked ,setIsLiked] = useState(false) 
  const likeHandler = () =>{
    setLike( isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="postTop">
             <div className="postTopLeft">
                <img src={Users.filter(u=> u.id === post.userId)[0].profilePicture} alt="" className="postProfileImage" />
                <span className="postUserName"> {Users.filter(u=> u.id === post.userId)[0].username}</span>
                <span className="postDate"> {post?.date} </span>
             </div>
             <div className="postTopRight">
                <MoreVertSharp className="postIcon"/>
             </div>
        </div>
        <div className="postCenter">
            <span className="postText">
               {post.desc}
            </span>
            <img src={post.photo} alt="" className="postCenterImage" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img src="/assets/like.png" alt="" onClick={ likeHandler} className="postLikeButton" />
                <img src="/assets/hearts.png" alt="" onClick={ likeHandler} className="postLikeButton" />
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
