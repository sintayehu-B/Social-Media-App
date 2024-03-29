import { Search, Person,Chat, Notifications } from '@mui/icons-material';
import "./topbar.css"
import {Link} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
export default function TopBar() {
    const {user} = useContext(AuthContext);
    const pf  = process.env.REACT_APP_PUBLIC_FOLDER 
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <Link to="/" style={{textDecoration: "none"}}> 
            <span className="logo">
                Farta Social
            </span>
            </Link>
        </div>
        
        <div className="topbarCenter">
            <div className="searchbar">
                <Search className="searchIcon"/>
                <input placeholder='Search for friends, posts, and videos...' type="text" className="searchInput" />
                
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <Person/>
                    <span className="topbarIconBadge">
                        1
                    </span>
                </div>
                <div className="topbarIconItem">
                    <Chat/>
                    <span className="topbarIconBadge">
                        2
                    </span>
                </div>
                <div className="topbarIconItem">
                    <Notifications/>
                    <span className="topbarIconBadge">
                        3
                    </span>
                </div>
            </div>
                
            <Link to={`/profile/${user.username}`}>
                <img src={ user.profilePicture ?pf +user.profilePicture : pf+"Person/avatar.png"} alt="" className='topbarImage'/>
            </Link>
        </div>
    </div>
  )
}
