import React, { useContext, useRef } from "react";
import { CircularProgress } from "@material-ui/core";

import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { dispatch, isFetching } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
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
            <button className="loginButton" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="2.5rem" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot password?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="white" size="2.5rem" />
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
