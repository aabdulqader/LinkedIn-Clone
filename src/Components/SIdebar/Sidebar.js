import React from "react";
import "./Sidebar.css";
import Avatar from "@material-ui/core/Avatar";
import { useSelector } from "react-redux";
import { selectUser } from "../../userSlice";

const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span>#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <Avatar className="sidebar__avatar" src={user.photoUrl}>
          {user.displayName && user.displayName[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">6,548</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,458</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <h4>Recent</h4>
        {recentItem("react.js")}
        {recentItem("programming")}
        {recentItem("webdevelopment")}
        {recentItem("development")}
        {recentItem("design")}
        {recentItem("javascript")}
        {recentItem("python")}
      </div>
    </div>
  );
};

export default Sidebar;
