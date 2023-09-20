import React, { useState } from "react";
import Logo from "../images//login-logo.png";
import { Link } from "react-router-dom";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const register = (e) => {
    e.preventDefault();
    const new_email = email.slice(0,email.indexOf('@'));
    localStorage.setItem('email',new_email);
    navigate("/");
  };
  const log = (e) => {
    e.preventDefault();
    const new_email = email.slice(0,email.indexOf('@'));
    localStorage.setItem('email',new_email);
    navigate("/");
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src={Logo} alt="logo-img" />
      </Link>
      <div className="login-container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={log} className="login-signInBtn" type="submit">
            Sign in
          </button>
          <p>
            By continuing, you agree to Amazon's Fake Clone Conditions of Use
            and Privacy Notice.
          </p>
          <button className="login-registerBtn" onClick={register}>
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
