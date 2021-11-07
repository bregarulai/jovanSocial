import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router";

import "./register.css";

const Register = () => {
  const email = useRef();
  const username = useRef();
  const password = useRef();
  const confirmedPassword = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.current.value !== confirmedPassword.current.value) {
      confirmedPassword.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        password: password.current.value,
        email: email.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log("ERROR: ", err);
      }
    }
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
              placeholder="username"
              type="text"
              className="loginInput"
              required
              ref={username}
            />
            <input
              placeholder="email"
              type="email"
              className="loginInput"
              required
              ref={email}
            />
            <input
              placeholder="password"
              type="password"
              className="loginInput"
              required
              ref={password}
              minLength={6}
            />
            <input
              placeholder="confirm password"
              type="password"
              className="loginInput"
              required
              ref={confirmedPassword}
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button
              className="loginRegisterButton"
              onClick={() => navigate("/login")}
            >
              Log Into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
