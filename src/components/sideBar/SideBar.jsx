import "./sidebar.css"
import { RssFeed, Chat, Groups, Bookmark, Help, Work, Event, SchoolSharp } from '@mui/icons-material';

export default function SideBar() {
  return (
    <div className="sideBarContainer">
        <div className="sideBarWrapper">
            <ul className="sideBarList">
                <li className="sideBarListItem">
                    <RssFeed className="sideBarIcon"/>
                    <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sideBarListItem">
                    <Chat className="sideBarIcon"/>
                    <span className="sidebarListItemText">Chat</span>
                </li>
                <li className="sideBarListItem">
                    <Groups className="sideBarIcon"/>
                    <span className="sidebarListItemText">Groups</span>
                </li>
                <li className="sideBarListItem">
                    <Bookmark className="sideBarIcon"/>
                    <span className="sidebarListItemText">Bookmarks</span>
                </li>
                <li className="sideBarListItem">
                    <Help className="sideBarIcon"/>
                    <span className="sidebarListItemText">Questions</span>
                </li>
                <li className="sideBarListItem">
                    <Work className="sideBarIcon"/>
                    <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sideBarListItem">
                    <Event className="sideBarIcon"/>
                    <span className="sidebarListItemText">Events</span>
                </li>
                <li className="sideBarListItem">
                    <SchoolSharp className="sideBarIcon"/>
                    <span className="sidebarListItemText">Courses</span>
                </li>
            </ul>
            <button className="sideBarButton" > Show More </button>
            <hr className="sideBarHr" />
            <ul className="sideBarFriendList">
            </ul>
                <li className="sideBarFriend">
                    <img className="sideBarFriendImg" src="/assets/Person/dan.jpg" alt="" />
                    <span className="sideBarfriendName">
                        Jane Doe
                    </span>
                    </li>
                <li className="sideBarFriend">
                    <img className="sideBarFriendImg" src="/assets/Person/dan.jpg" alt="" />
                    <span className="sideBarfriendName">
                        Jane Doe
                    </span>
                    </li>
               <li className="sideBarFriend">
                    <img className="sideBarFriendImg" src="/assets/Person/dan.jpg" alt="" />
                    <span className="sideBarfriendName">
                        Jane Doe
                    </span>
                     </li>
               <li className="sideBarFriend">
                    <img className="sideBarFriendImg" src="/assets/Person/dan.jpg" alt="" />
                    <span className="sideBarfriendName">
                        Jane Doe
                    </span>
                     </li>
               <li className="sideBarFriend">
                    <img className="sideBarFriendImg" src="/assets/Person/dan.jpg" alt="" />
                    <span className="sideBarfriendName">
                        Jane Doe
                    </span>
                     </li>
               <li className="sideBarFriend">
                    <img className="sideBarFriendImg" src="/assets/Person/dan.jpg" alt="" />
                    <span className="sideBarfriendName">
                        Jane Doe
                    </span>
                     </li>
               <li className="sideBarFriend">
                    <img className="sideBarFriendImg" src="/assets/Person/dan.jpg" alt="" />
                    <span className="sideBarfriendName">
                        Jane Doe
                    </span>
                     </li>
               <li className="sideBarFriend">
                    <img className="sideBarFriendImg" src="/assets/Person/dan.jpg" alt="" />
                    <span className="sideBarfriendName">
                        Jane Doe
                    </span>
                     </li>
               <li className="sideBarFriend">
                    <img className="sideBarFriendImg" src="/assets/Person/dan.jpg" alt="" />
                    <span className="sideBarfriendName">
                        Jane Doe
                    </span>
                     </li>
               <li className="sideBarFriend">
                    <img className="sideBarFriendImg" src="/assets/Person/dan.jpg" alt="" />
                    <span className="sideBarfriendName">
                        Jane Doe
                    </span>
                     </li>
               <li className="sideBarFriend">
                    <img className="sideBarFriendImg" src="/assets/Person/dan.jpg" alt="" />
                    <span className="sideBarfriendName">
                        Jane Doe
                    </span>
                     </li>
            </div> 
    </div>
  )
}
