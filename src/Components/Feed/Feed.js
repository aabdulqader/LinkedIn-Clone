import React, { useEffect, useState } from "react";
import CreatePost from "./CreatePost";
import "./Feed.css";
import Post from "./Post";
import db from "../../Firebase";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const unsubscribe = db
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="feed">
      <CreatePost setPosts={setPosts} />
      <FlipMove>
        {posts.map((post) => (
          <Post
            caption={post.data.caption}
            name={post.data.name}
            image={post.data.image}
            photoUrl={post.data.photoUrl}
            timestamp={post.data.timestamp}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
