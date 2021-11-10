import React, { useContext, useEffect, useState } from "react";

import "./rightBar.css";
import { Online } from "../../components";
import { Users } from "../../dummyData";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Add } from "@material-ui/icons";

const RightBar = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getUsersFriends = async () => {
      try {
        const res = await axios.get(`/users/friends/${user._id}`);
        setFriends(res.data);
      } catch (err) {
        console.log("ERROR: ", err);
      }
    };
    getUsersFriends();
  }, [user._id]);
  const HomeRightBar = () => {
    return (
      <>
        <div className="rightBarWrapperBirthdayContainer">
          <img
            src={`${PF}gift.png`}
            alt="birthday"
            className="rightBarWrapperBirthdayContainerImg"
          />
          <span className="rightBarWrapperBirthdayContainerText">
            <b>Maruca Rasputing</b> and <b>3 other friends</b> have a birthday
            today.
          </span>
        </div>
        <img src={`${PF}ad.png`} alt="ad" className="rightBarWrapperAdd" />
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
        {user.username !== currentUser.username && (
          <button className="rightBarFollowButton">
            Follow
            <Add className="rightBarFollowButtonIcon" />
          </button>
        )}
        <h4 className="rightBarTittle">User information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoValue">{user.city}</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarInfoValue">{user.from}</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relationship:</span>
            <span className="rightBarInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : ""}
            </span>
          </div>
        </div>
        <h4 className="rightBarTittle">User friends</h4>
        <div className="rightBarFollowings">
          {friends.map((friend) => (
            <Link key={friend._id} to={`/profile/${friend.username}`}>
              <div className="rightBarFollowing">
                <img
                  src={`${PF}${friend.profilePicture}`}
                  alt="user"
                  className="rightBarFollowingImg"
                />
                <span className="rightBarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default RightBar;
