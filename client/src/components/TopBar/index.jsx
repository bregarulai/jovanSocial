import { Person, Search, Chat, Notifications } from "@material-ui/icons";
import React from "react";

import "./topBar.css";

const TopBar = () => {
  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
        <span className="topBarLogo">Jovan Social</span>
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

        <img src="/assets/person/1.jpeg" alt="profile" className="topBarImg" />
      </div>
    </div>
  );
};

export default TopBar;
