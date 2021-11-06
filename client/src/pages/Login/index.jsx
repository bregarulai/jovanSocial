import React, { useRef } from "react";

import "./login.css";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email", email.current.value);
    console.log("password", password.current.value);
  };
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
          <form className="loginBox" onSubmit={handleSubmit}>
            <input
              placeholder="email"
              type="email"
              className="loginInput"
              ref={email}
              required
            />
            <input
              placeholder="password"
              type="password"
              className="loginInput"
              ref={password}
              minLength={6}
              required
            />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
