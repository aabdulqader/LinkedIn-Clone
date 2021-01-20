import React, { useEffect } from "react";
import "./App.css";
import Feed from "./Components/Feed/Feed";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/SIdebar/Sidebar";
import Widgets from "./Components/Widgets/Widgets";
import { useSelector } from "react-redux";
import { login, logout, selectUser } from "./userSlice";
import Login from "./Components/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./Components/Login/SignUp";
import { auth } from "./Firebase";
import { useDispatch } from "react-redux";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            password: userAuth.password,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            {user ? (
              <div className="app__body">
                <Sidebar />
                <Feed />
                <Widgets />
              </div>
            ) : (
              <Login />
            )}
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
