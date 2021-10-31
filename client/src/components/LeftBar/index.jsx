import {
  Bookmark,
  Chat,
  Event,
  Group,
  HelpOutline,
  PlayCircleFilledOutlined,
  RssFeed,
  School,
  WorkOutline,
} from "@material-ui/icons";
import React from "react";

import "./leftBar.css";
import { Users } from "../../dummyData";
import { CloseFriend } from "../../components";

function LeftBar() {
  return (
    <div className="leftBar">
      <div className="leftBarWrapper">
        <ul className="leftBarList">
          <li className="leftBarListItem">
            <RssFeed className="leftBarListItemIcon" />
            <span className="leftBarListItemText">Feed</span>
          </li>
          <li className="leftBarListItem">
            <Chat className="leftBarListItemIcon" />
            <span className="leftBarListItemText">Chat</span>
          </li>
          <li className="leftBarListItem">
            <PlayCircleFilledOutlined className="leftBarListItemIcon" />
            <span className="leftBarListItemText">Videos</span>
          </li>
          <li className="leftBarListItem">
            <Group className="leftBarListItemIcon" />
            <span className="leftBarListItemText">Group</span>
          </li>
          <li className="leftBarListItem">
            <Bookmark className="leftBarListItemIcon" />
            <span className="leftBarListItemText">Bookmarks</span>
          </li>
          <li className="leftBarListItem">
            <HelpOutline className="leftBarListItemIcon" />
            <span className="leftBarListItemText">Questions</span>
          </li>
          <li className="leftBarListItem">
            <WorkOutline className="leftBarListItemIcon" />
            <span className="leftBarListItemText">Jobs</span>
          </li>
          <li className="leftBarListItem">
            <Event className="leftBarListItemIcon" />
            <span className="leftBarListItemText">Events</span>
          </li>
          <li className="leftBarListItem">
            <School className="leftBarListItemIcon" />
            <span className="leftBarListItemText">Courses</span>
          </li>
        </ul>
        <button className="leftBarButton">Show more</button>
        <hr className="leftBarHr" />
        <ul className="leftBarFriendsList">
          {Users.map((user) => (
            <CloseFriend key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LeftBar;
