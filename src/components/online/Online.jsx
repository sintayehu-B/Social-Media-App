import "./online.css"

export default function Online({user}) {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="rightBarFriends">
            <div className="rightBarProfileContainer">
              <img src={pf+user.profilePicture} alt="" className="rightBarProfileImage" />
              <span className="rightBarOnline"></span>
            </div>
              <span className="rightBarUserName"> {user.username} </span>
          </li>
  )
}
