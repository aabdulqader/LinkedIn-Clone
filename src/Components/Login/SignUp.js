import React, { useEffect, useState } from "react";
import "./Login.css";
import logo from "../../linkedInLogo.png";
import TextField from "@material-ui/core/TextField";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "../../Firebase";
import { login } from "../../userSlice";

const SignUp = () => {
  document.title = "Sign Up | LinkedIn";
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const dispatch = useDispatch();

  const signup = (event) => {
    event.preventDefault();
    // Firebase Register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: photoUrl,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                password: userAuth.user.password,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: photoUrl,
              })
            );
            history.push("/");
          });
      })
      .catch((error) => alert(error.message));

    setEmail("");
    setName("");
    setPhotoUrl("");
    setPassword("");
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src={logo} alt="LinkedIn" />
        <h1>Sign Up</h1>
        <p>Make the most of your professional life</p>
        <form>
          <TextField
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="login__input"
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            required
          />
          <TextField
            onChange={(e) => setPhotoUrl(e.target.value)}
            value={photoUrl}
            className="login__input"
            id="outlined-basic"
            label="Profile Pic URL(optional)"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="login__input"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            required
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="login__input"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            required
          />

          <p></p>
          <button onClick={signup} type="submit">
            Sign Up
          </button>
        </form>
        <p className="login__bottom">
          <Link to="/">
            Already on LinkedIn? <span>Log in</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
