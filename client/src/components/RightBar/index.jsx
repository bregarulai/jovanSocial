import React from "react";

import "./rightBar.css";
import { Online } from "../../components";
import { Users } from "../../dummyData";

const RightBar = ({ profile }) => {
  const HomeRightBar = () => {
    return (
      <>
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
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightBarTittle">User information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoValue">New York</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarInfoValue">Madrid</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relationship:</span>
            <span className="rightBarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightBarTittle">User friends</h4>
        <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img
              src="/assets/person/1.jpeg"
              alt="user"
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">Jane</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="/assets/person/6.jpeg"
              alt="user"
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">Marie</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="/assets/person/8.jpeg"
              alt="user"
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">Sophie</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="/assets/person/4.jpeg"
              alt="user"
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">Marla</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="/assets/person/5.jpeg"
              alt="user"
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">Jane</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="/assets/person/2.jpeg"
              alt="user"
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">Tom</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="/assets/person/3.jpeg"
              alt="user"
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">Karen</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default RightBar;
