import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import axios from "axios";
import React, { useContext, useRef, useState } from "react";

import { AuthContext } from "../../context/AuthContext";
import "./share.css";

const Share = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      try {
        const res = await axios.post(`/upload`, data);
      } catch (err) {
        console.log("ERROR: ", err);
      }
    }
    try {
      const res = await axios.post(`/posts`, newPost);
      window.location.reload();
    } catch (err) {
      console.log("ERROR: ", err);
    }
  };
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={PF + user.profilePicture}
            alt="person"
            className="shareImg"
          />
          <input
            type="text"
            className="shareInput"
            ref={desc}
            placeholder={`What's in your mind ${user.username}?`}
          />
        </div>
        <hr className="shareHr"></hr>
        <form className="shareBottom" onSubmit={handleSubmit}>
          <div className="shareOptions">
            <label className="shareOption" htmlFor="file">
              <PermMedia htmlColor="tomato" className="shareOptionIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png, .jpeg, .jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareOptionIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareOptionIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions
                htmlColor="goldenrod"
                className="shareOptionIcon"
              />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
};

export default Share;
