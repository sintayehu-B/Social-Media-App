import Feed from "../../components/feed/Feed"
import RightBar from "../../components/rightBar/RightBar"
import SideBar from "../../components/sideBar/SideBar"
import TopBar from "../../components/topBar/TopBar"
import "./profile.css"
import { useEffect,useState } from "react";
import axios from "axios";
import {useParams} from "react-router"
export default function Profile() {
  const [user ,setUser] = useState({})
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;
  const username = useParams().username;
  
  useEffect(()=>{
    const fetchUsers = async() => {

      const res =await axios.get(`/users?username=${username}`)
     
      setUser(res.data);
      
    }
    fetchUsers();
  },[username])
  return (
    <>
      <TopBar />
      <div className="profile">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={user.coverPicture ||pf+"Person/cover.jpg"}
                alt=""
              />
              <img
                className="profileUserImg"
                src={user.profilePicture || pf + "Person/avatar.png"}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.description}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username}/>
            <RightBar user={user}/>
          </div>
        </div>
      </div>
    </>
  )
}
