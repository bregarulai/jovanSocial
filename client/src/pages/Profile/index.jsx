import React from "react";

import { Feed, LeftBar, RightBar, TopBar } from "../../components";
import "./profile.css";

const Profile = () => {
  return (
    <>
      <TopBar />
      <div className="profileContainer">
        <LeftBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileRightTopCover">
              <img
                src="/assets/post/3.jpeg"
                alt="post"
                className="profileRightTopCoverImg"
              />
              <img
                src="/assets/person/7.jpeg"
                alt="user"
                className="profileRightTopUserImg"
              />
            </div>
            <div className="profileRightTopInfo">
              <h4 className="profileRightTopInfoName">Juanito</h4>
              <span className="profileRightTopInfoDesc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
