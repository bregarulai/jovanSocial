import React from "react";

import "./feed.css";
import { Share, Post } from "../../components";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
