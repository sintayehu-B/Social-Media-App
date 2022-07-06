import React from 'react'

export default function CloseFriends({user}) {
  return (
    <li className="sideBarFriend">
                    <img className="sideBarFriendImg" src={user.profilePicture} alt="" />
                    <span className="sideBarFriendName">
                        {user.username}
                    </span>
                    </li>
  )
}
