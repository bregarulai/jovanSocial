import React from "react";

import "./register.css";

const Register = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">JovanSocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Jovan Social
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="username" type="text" className="loginInput" />
            <input placeholder="email" type="email" className="loginInput" />
            <input
              placeholder="password"
              type="password"
              className="loginInput"
            />
            <input
              placeholder="confirm password"
              type="password"
              className="loginInput"
            />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">Log Into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
