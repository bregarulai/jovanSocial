import { MoreVert } from "@material-ui/icons";
import React from "react";

import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assets/person/1.jpeg"
              alt="user"
              className="postTopLeftImg"
            />
            <span className="postTopLeftName">Jane</span>
            <span className="postTopLeftDate">5 min ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert className="postTopRightIcon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postCenterText">Hey! it's my first post.</span>
          <img src="/assets/post/1.jpeg" alt="post" className="postCenterImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="/assets/like.png"
              alt="like"
              className="postBottomLeftImg"
            />
            <img
              src="/assets/heart.png"
              alt="like"
              className="postBottomLeftImg"
            />
            <span className="postBottomLeftCounter">15 people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postBottomRightText">5 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
