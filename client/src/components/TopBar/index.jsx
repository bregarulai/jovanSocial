import { Person, Search, Chat, Notifications } from "@material-ui/icons";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./topBar.css";
import { AuthContext } from "../../context/AuthContext";

const TopBar = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
        <Link to="/">
          <span className="topBarLogo">Jovan Social</span>
        </Link>
      </div>
      <div className="topBarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            type="text"
            className="searchInput"
            placeholder="Search for friends, post or video"
          />
        </div>
      </div>
      <div className="topBarRight">
        <div className="topBarLinks">
          <span className="topBarLink">Homepage</span>
          <span className="topBarLink">Timeline</span>
        </div>
        <div className="topBarIcons">
          <div className="topBarIconItem">
            <Person className="badgeIcon" />
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <Chat className="badgeIcon" />
            <span className="topBarIconBadge">3</span>
          </div>
          <div className="topBarIconItem">
            <Notifications className="badgeIcon" />
            <span className="topBarIconBadge">2</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={PF + user.profilePicture}
            alt="profile"
            className="topBarImg"
          />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
