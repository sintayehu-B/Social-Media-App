import "./online.css"

export default function Online({user}) {
  return (
    <li className="rightBarFriends">
            <div className="rightBarProfileContainer">
              <img src={user.profilePicture} alt="" className="rightBarProfileImage" />
              <span className="rightBarOnline"></span>
            </div>
              <span className="rightBarUserName"> {user.username} </span>
          </li>
  )
}
