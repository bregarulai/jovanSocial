import React from "react";

import "./closeFriend.css";

const CloseFriend = ({ user }) => {
  return (
    <li key={user.id} className="leftBarFriend">
      <img className="leftBarFriendImg" src={user.profilePicture} alt="frind" />
      <span className="leftBarFriendName">{user.username}</span>
    </li>
  );
};

export default CloseFriend;
