import React from "react";

import "./rightBar.css";
import { Online } from "../../components";
import { Users } from "../../dummyData";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        <div className="rightBarWrapperBirthdayContainer">
          <img
            src="/assets/gift.png"
            alt="birthday"
            className="rightBarWrapperBirthdayContainerImg"
          />
          <span className="rightBarWrapperBirthdayContainerText">
            <b>Maruca Rasputing</b> and <b>3 other friends</b> have a birthday
            today.
          </span>
        </div>
        <img src="/assets/ad.png" alt="ad" className="rightBarWrapperAdd" />
        <h4 className="rightBarWrapperTittle">Online Friends</h4>
        <ul className="rightBarWrapperFriendList">
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightBar;
