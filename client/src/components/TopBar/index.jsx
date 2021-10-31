import { Person, Search } from "@material-ui/icons";
import React from "react";

import "./topBar.css";

const TopBar = () => {
  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
        <span className="logo">Jovan Social</span>
      </div>
      <div className="topBarCenter">
        <div className="searchbar">
          <Search />
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
          <div className="topBarIcons">
            <div className="topBarIconItem">
              <Person />
              <span className="topBarIconBadge">1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
