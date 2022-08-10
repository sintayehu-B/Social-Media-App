import"./share.css"
import { PermMedia, Label, Room, EmojiEmotionsSharp  } from '@mui/icons-material';
import { useState,useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
export default function Share() {
    const {user} = useContext(AuthContext);
    const pf = process.env.REACT_APP_PUBLIC_FOLDER 
    const description = useRef()
    const [file , setFile] = useState(null)
    const submitHandler = async(e) => {
        e.preventDefault()
        const newPost = {
            userId: user._id,
            description : description.current.value,
        }
        if(file){
            const fileName = Date.now() + file.name
            const data = new FormData();
            data.append('file',file)
            data.append('fileName',fileName)
            newPost.image = fileName
            try {
                await axios.post("/upload",data)
            } catch (error) {
                console.log(error);
            }
        }
        try {
            await axios.post("/posts",newPost)
            window.location.reload()
        } catch (error) {
            
        }
    }
    console.log(pf)
  return (
    
    <div className="shareContainer">
        <div className="shareWrapper">
            <div className="shareTop">
                <img  src={user.profilePicture ? pf+user.profilePicture : pf+"Person/avatar.png"} className="shareProfileImage" alt="" />
                <input placeholder={"What's in your mind " + user.username + "?" } ref={description} className="shareInput" />
            </div>
            <hr className="shareHr" />
            <form className="shareButton" onSubmit={submitHandler}>
                <div className="shareOptionContainer">
                    <label htmlFor="file" className="shareOption">
                        <PermMedia htmlColor="green" className="shareMediaIcon"/>
                        <span className="shareOptionText">Photo/Video</span>
                        <input style={{display: "none"}} type="file" id="file" accept=".png,.jpg,.jpeg," onChange={(e)=>{setFile(e.target.files[0]);}}/>
                    </label>
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
                    <button className="shareButtonIcon" type="submit"> share</button>
                </div>
            </form>
        </div>
    </div>
  )
}
