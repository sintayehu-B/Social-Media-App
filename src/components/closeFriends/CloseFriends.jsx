import React from 'react'

export default function CloseFriends({user}) {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sideBarFriend">
                    <img className="sideBarFriendImg" src={pf+user.profilePicture} alt="" />
                    <span className="sideBarFriendName">
                        {user.username}
                    </span>
                    </li>
  )
}
