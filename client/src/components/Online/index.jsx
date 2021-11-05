import React from "react";

import "./online.css";

const Online = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="rightBarWrapperFriend">
      <div className="rightBarWrapperFriendImgContainer">
        <img
          src={PF + user.profilePicture}
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
