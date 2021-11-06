import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { Feed, LeftBar, RightBar, TopBar } from "../../components";
import "./profile.css";

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const params = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${params.username}`);
      setUser(res.data);
    };

    fetchUser();
  }, [params.username]);

  return (
    <>
      <TopBar />
      <div className="profileContainer">
        <LeftBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileRightTopCover">
              <img
                src={`${PF}${user.coverPicture}`}
                alt="post"
                className="profileRightTopCoverImg"
              />
              <img
                src={`${PF}${user.profilePicture}`}
                alt="user"
                className="profileRightTopUserImg"
              />
            </div>
            <div className="profileRightTopInfo">
              <h4 className="profileRightTopInfoName">{user.username}</h4>
              <span className="profileRightTopInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={user.username} />
            <RightBar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
