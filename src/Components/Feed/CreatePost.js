import React, { useEffect, useState } from "react";
import "./CreatePost.css";
import CreateIcon from "@material-ui/icons/Create";
import firebase from "firebase";
import PhotoIcon from "@material-ui/icons/Photo";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EventNoteIcon from "@material-ui/icons/EventNote";
import SubjectIcon from "@material-ui/icons/Subject";
import db from "../../Firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../userSlice";

const CreatePost = ({ setPosts }) => {
  const user = useSelector(selectUser);

  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      caption: input,
      name: user.displayName,
      image: imageUrl,
      photoUrl: user.photoUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
    setImageUrl("");
  };

  return (
    <div className="createPost">
      <div className="createPost__input">
        <CreateIcon />
        <form>
          <input
            className="createPost__textinput"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Start a post"
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="createPost__fileinput"
            placeholder="Enter Image Url"
          />
          <button disabled={!input} onClick={sendPost} type="submit">
            Post
          </button>
        </form>
      </div>
      <div className="createPost__options">
        <div className="createPost__options">
          <PhotoIcon className="createPost__photoicon" />
          <p>Photo</p>
        </div>
        <div className="createPost__options">
          <YouTubeIcon className="createPost__videoicon" />
          <p>Video</p>
        </div>
        <div className="createPost__options">
          <EventNoteIcon className="createPost__eventicon" />
          <p>Event</p>
        </div>
        <div className="createPost__options">
          <SubjectIcon className="createPost__articleicon" />
          <p>Write article</p>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
