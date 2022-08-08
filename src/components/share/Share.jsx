import"./share.css"
import { PermMedia, Label, Room, EmojiEmotionsSharp  } from '@mui/icons-material';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Share() {
    const {user} = useContext(AuthContext);
    const pf = process.env.REACT_APP_PUBLIC_FOLDER 
  return (
    <div className="shareContainer">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src={user.profilePicture ? pf+user.profilePicture : pf+"Person/avatar.png"} className="shareProfileImage" alt="" />
                <input placeholder="What's in your mind" className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareButton">
                <div className="shareOptionContainer">
                    <div className="shareOption">
                        <PermMedia htmlColor="green" className="shareMediaIcon"/>
                        <span className="shareOptionText">Photo/Video</span>
                        
                    </div>
                    <div className="shareOption">
                        <Label htmlColor="blue" className="shareMediaIcon"/>
                        <span className="shareOptionText">Tag</span>
                        
                    </div>
                    <div className="shareOption">
                        <Room htmlColor="gray" className="shareMediaIcon"/>
                        <span className="shareOptionText">Location</span>
                        
                    </div>
                    <div className="shareOption">
                        <EmojiEmotionsSharp htmlColor="goldenrod" className="shareMediaIcon"/>
                        <span className="shareOptionText">Feelings/activity</span>
                        
                    </div>
                    <button className="shareButtonIcon"> share</button>
                </div>
            </div>
        </div>
    </div>
  )
}
