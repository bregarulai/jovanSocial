import { MoreVert } from "@material-ui/icons";
import React from "react";

import "./post.css";
import { Users } from "../../dummyData";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={
                Users.filter((user) => user.id === post.userId)[0]
                  .profilePicture
              }
              alt="user"
              className="postTopLeftImg"
            />
            <span className="postTopLeftName">
              {Users.filter((user) => user.id === post.userId)[0].username}
            </span>
            <span className="postTopLeftDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert className="postTopRightIcon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postCenterText">{post?.desc}</span>
          <img src={post.photo} alt="post" className="postCenterImg" />
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
            <span className="postBottomLeftCounter">
              {post.like} people liked it
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postBottomRightText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
