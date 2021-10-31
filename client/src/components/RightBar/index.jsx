import React from "react";
import "./rightBar.css";

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
          <li className="rightBarWrapperFriend">
            <div className="rightBarWrapperFriendImgContainer">
              <img
                src="/assets/person/3.jpeg"
                alt="friend"
                className="rightBarWrapperFriendImg"
              />
              <span className="rightBarWrapperFriendBadge"></span>
            </div>
            <span className="rightBarWrapperFriendName">Peregilda</span>
          </li>
          <li className="rightBarWrapperFriend">
            <div className="rightBarWrapperFriendImgContainer">
              <img
                src="/assets/person/6.jpeg"
                alt="friend"
                className="rightBarWrapperFriendImg"
              />
              <span className="rightBarWrapperFriendBadge"></span>
            </div>
            <span className="rightBarWrapperFriendName">Matilda</span>
          </li>
          <li className="rightBarWrapperFriend">
            <div className="rightBarWrapperFriendImgContainer">
              <img
                src="/assets/person/4.jpeg"
                alt="friend"
                className="rightBarWrapperFriendImg"
              />
              <span className="rightBarWrapperFriendBadge"></span>
            </div>
            <span className="rightBarWrapperFriendName">Rendina</span>
          </li>
          <li className="rightBarWrapperFriend">
            <div className="rightBarWrapperFriendImgContainer">
              <img
                src="/assets/person/8.jpeg"
                alt="friend"
                className="rightBarWrapperFriendImg"
              />
              <span className="rightBarWrapperFriendBadge"></span>
            </div>
            <span className="rightBarWrapperFriendName">Shelly</span>
          </li>
          <li className="rightBarWrapperFriend">
            <div className="rightBarWrapperFriendImgContainer">
              <img
                src="/assets/person/5.jpeg"
                alt="friend"
                className="rightBarWrapperFriendImg"
              />
              <span className="rightBarWrapperFriendBadge"></span>
            </div>
            <span className="rightBarWrapperFriendName">Maria</span>
          </li>
          <li className="rightBarWrapperFriend">
            <div className="rightBarWrapperFriendImgContainer">
              <img
                src="/assets/person/7.jpeg"
                alt="friend"
                className="rightBarWrapperFriendImg"
              />
              <span className="rightBarWrapperFriendBadge"></span>
            </div>
            <span className="rightBarWrapperFriendName">Pedro</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightBar;
