import React from "react";
import "./Header.css";
import logo from "../../logo.png";

import HomeIcon from "@material-ui/icons/Home";
import AppsIcon from "@material-ui/icons/Apps";
import SmsIcon from "@material-ui/icons/Sms";
import NotificationsIcon from "@material-ui/icons/Notifications";
import WorkIcon from "@material-ui/icons/Work";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import HeaderOption from "./HeaderOption";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { useDispatch } from "react-redux";
import { logout, selectUser } from "../../userSlice";
import { useSelector } from "react-redux";
import { auth } from "../../Firebase";

const headerOptions = [
  {
    Icon: HomeIcon,
    title: "Home",
  },
  {
    Icon: SupervisorAccountIcon,
    title: "NetWork",
  },
  {
    Icon: WorkIcon,
    title: "Jobs",
  },
  {
    Icon: SmsIcon,
    title: "Messaging",
  },
  {
    Icon: NotificationsIcon,
    title: "Notifications",
  },
  {
    Icon: AppsIcon,
    title: "Work",
  },
];

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logouthandle = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="LinkedIn" />
        <div className="header__search">
          <input type="search" placeholder="Search" />
          <SearchIcon />
        </div>
      </div>
      <div className="header__right">
        {headerOptions.map((option) => (
          <HeaderOption Icon={option.Icon} title={option.title} />
        ))}
        {user ? (
          <div onClick={logouthandle} className="header__user">
            <Avatar className="header__useravatar" src={user.photoUrl}>
              {user.displayName && user.displayName[0]}
            </Avatar>
            <div>
              <h4 className="header__userTitle">
                {user ? <span>Logout</span> : <span>Login</span>}
              </h4>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
