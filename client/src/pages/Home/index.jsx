import React from "react";

import "./home.css";
import { Feed, LeftBar, RightBar, TopBar } from "../../components";

const Home = () => {
  return (
    <div>
      <TopBar />
      <LeftBar />
      <Feed />
      <RightBar />
    </div>
  );
};

export default Home;
