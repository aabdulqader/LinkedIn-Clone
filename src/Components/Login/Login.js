import React, { useEffect, useState } from "react";
import "./Login.css";
import logo from "../../linkedInLogo.png";
import TextField from "@material-ui/core/TextField";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../Firebase";
import { useDispatch } from "react-redux";
import { login } from "../../userSlice";

const Login = () => {
  document.title = "Login | LinkedIn";
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = (event) => {
    event.preventDefault();
    // Firebase Login
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));

    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src={logo} alt="LinkedIn" />
        <h1>Sign in</h1>
        <p>Stay updated on your professional world</p>
        <form>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login__input"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            required
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login__input"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            required
          />

          <p>Forgot password?</p>
          <button onClick={signin} type="submit">
            Sign in
          </button>
        </form>
        <p className="login__bottom">
          <Link to="/signup">
            New to LinkedIn? <span>Join now</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
