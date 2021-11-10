import React, { useContext, useEffect, useState } from "react";

import "./rightBar.css";
import { Online } from "../../components";
import { Users } from "../../dummyData";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove } from "@material-ui/icons";
import { ActionTypes } from "../../context/constants";

const RightBar = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?._id)
  );

  useEffect(() => {
    setFollowed(currentUser.followings.includes(user?._id));
  }, [currentUser.followings, user?._id]);

  useEffect(() => {
    const getUsersFriends = async () => {
      try {
        const res = await axios.get(`/users/friends/${user?._id}`);
        setFriends(res.data);
      } catch (err) {
        console.log("ERROR: ", err);
      }
    };
    getUsersFriends();
  }, [user?._id]);

  const handleFollow = async (e) => {
    e.preventDefault();
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: ActionTypes.UNFOLLOW, payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: ActionTypes.FOLLOW, payload: user._id });
      }
    } catch (err) {
      console.log("ERRO: ", err);
    }
    setFollowed(!followed);
  };

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
          <button className="rightBarFollowButton" onClick={handleFollow}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? (
              <Remove className="rightBarFollowButtonIcon" />
            ) : (
              <Add className="rightBarFollowButtonIcon" />
            )}
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
