import React, { useEffect, useState } from "react";

import "./feed.css";
import { Share, Post } from "../../components";
import axios from "axios";

const Feed = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const fetchPosts = async (userId) => {
      const res = await axios.get(`posts/timeline/${userId}`);
      setPost(res.data);
    };

    fetchPosts("618477b8d38196b06d28b13d");
  }, []);

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
