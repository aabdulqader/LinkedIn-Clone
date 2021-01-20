import { Avatar } from "@material-ui/core";
import "./Post.css";
import PublicIcon from "@material-ui/icons/Public";
import AddIcon from "@material-ui/icons/Add";
import React, { forwardRef } from "react";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import TelegramIcon from "@material-ui/icons/Telegram";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import RedoOutlinedIcon from "@material-ui/icons/RedoOutlined";

const Post = forwardRef(
  ({ caption, name, image, photoUrl, timestamp }, ref) => {
    return (
      <div ref={ref} className="post">
        <div className="post__top">
          <div className="post__topinfo">
            <Avatar src={photoUrl} className="post__avatar">
              {name && name[0]}
            </Avatar>
            <div className="post__info">
              <h4>{name}</h4>
              <small>Full Stack Web developer</small>
              <br />
              <small>12h</small> . <PublicIcon />{" "}
            </div>
          </div>
          <div className="post__topButton">
            <AddIcon />
            <h3>Follow</h3>
          </div>
        </div>
        <p>{caption}</p>
        <img src={image} alt="" />
        <span>
          <img
            src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
            alt=""
          />
          <img
            src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97"
            alt=""
          />
          <img
            src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f"
            alt=""
          />
          <small>3,562 . 44 comments</small>
        </span>
        <div className="post__options">
          <div className="post__option">
            <ThumbUpAltOutlinedIcon />
            <p>Like</p>
          </div>
          <div className="post__option">
            <QuestionAnswerOutlinedIcon />
            <p>Comment</p>
          </div>
          <div className="post__option">
            <RedoOutlinedIcon />
            <p>Share</p>
          </div>
          <div className="post__option">
            <TelegramIcon />
            <p>Send</p>
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
