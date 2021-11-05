import React from "react";

import "./closeFriend.css";

const CloseFriend = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li key={user.id} className="leftBarFriend">
      <img
        className="leftBarFriendImg"
        src={PF + user.profilePicture}
        alt="frind"
      />
      <span className="leftBarFriendName">{user.username}</span>
    </li>
  );
};

export default CloseFriend;
