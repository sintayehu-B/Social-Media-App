import "./posts.css"
import { MoreVertSharp } from '@mui/icons-material';

export default function Posts() {
  return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="postTop">
             <div className="postTopLeft">
                <img src="/assets/Person/redi_post2.jpg" alt="" className="postProfileImage" />
                <span className="postUserName"> Rediate Befekadu</span>
                <span className="postDate"> 5 mins ago </span>
             </div>
             <div className="postTopRight">
                <MoreVertSharp className="postIcon"/>
             </div>
        </div>
        <div className="postCenter">
            <span className="postText">
                Hey Guys watch and learn the writing style of chela
            </span>
            <img src="/assets/Post/chala.jpg" alt="" className="postCenterImage" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img src="/assets/like.png" alt="" className="postLikeButton" />
                <img src="/assets/heart-removebg-preview.png" alt="" className="postLikeButton" />
                <span className="postLikeCounter">12 people liked it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText"> 9 comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}
