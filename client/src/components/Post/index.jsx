import { MoreVert } from "@material-ui/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { format } from "timeago.js";

import "./post.css";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users/${post.userId}`);
      setUser(res.data);
    };

    fetchUser();
  }, [post.userId]);

  const likedHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={PF + user.profilePicture}
              alt="user"
              className="postTopLeftImg"
            />
            <span className="postTopLeftName">{user.username}</span>
            <span className="postTopLeftDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert className="postTopRightIcon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postCenterText">{post?.desc}</span>
          <img src={PF + post.img} alt="post" className="postCenterImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src={`${PF}like.png`}
              alt="like"
              className="postBottomLeftImg"
              onClick={likedHandler}
            />
            <img
              src={`${PF}heart.png`}
              alt="like"
              className="postBottomLeftImg"
              onClick={likedHandler}
            />
            <span className="postBottomLeftCounter">
              {like > 0 ? `${like} people liked it` : "no likes"}
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
