import React, { useEffect, useState } from "react";

import "./feed.css";
import { Share, Post } from "../../components";
import axios from "axios";

const Feed = ({ username }) => {
  const [post, setPost] = useState([]);
  console.log("USERNAME: ", username);
  useEffect(() => {
    const fetchPosts = async (userId) => {
      const res = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get(`/posts/timeline/${userId}`);
      setPost(res.data);
    };

    fetchPosts("618477b8d38196b06d28b13d");
  }, [username]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {post.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
