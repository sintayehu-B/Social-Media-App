import { Search, Person,Chat, Notifications } from '@mui/icons-material';
import "./topbar.css"
import {Link} from "react-router-dom";
export default function TopBar() {
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
            <img src="/assets/Person/redi_post2.jpg" alt="" className='topbarImage'/>
        </div>
    </div>
  )
}
