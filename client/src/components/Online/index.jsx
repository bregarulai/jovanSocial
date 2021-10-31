import React from "react";

import "./online.css";

const Online = ({ user }) => {
  return (
    <li className="rightBarWrapperFriend">
      <div className="rightBarWrapperFriendImgContainer">
        <img
          src={user.profilePicture}
          alt="friend"
          className="rightBarWrapperFriendImg"
        />
        <span className="rightBarWrapperFriendBadge"></span>
      </div>
      <span className="rightBarWrapperFriendName">{user.username}</span>
    </li>
  );
};

export default Online;
