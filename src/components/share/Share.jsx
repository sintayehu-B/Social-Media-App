import"./share.css"
import { PermMedia, Label, Room, EmojiEmotionsSharp  } from '@mui/icons-material';

export default function Share() {
  return (
    <div className="shareContainer">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/assets/Person/ermias.jpg" className="shareProfileImage" alt="" />
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
