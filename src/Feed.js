import { Avatar } from "@mui/material";
import ButtonOption from "./ButtonOption";
import "./feed.css";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import EventIcon from "@mui/icons-material/Event";
import ArticleIcon from "@mui/icons-material/Article";
import Post from "./Post";
import { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import firebase from "firebase/app";
import "firebase/firestore";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);
  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      avatar: "",
      name: "Biren Patel",
      description: "Hindustan Unilever Ltd | Customer Retention Officer",
      time: "16h",
      msg: input,
      msgImg: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__inputForm">
          <Avatar src="" />
          <div className="feed__input">
            <form action="">
              <input
                type="text"
                placeholder="Type a Post"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />

              <button type="submit" onClick={sendPost}>
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="feed_inputOptions">
          <ButtonOption title="Photo" Icon={InsertPhotoIcon} color="#70b5f9" />
          <ButtonOption title="Video" Icon={VideoLibraryIcon} color="#7fc15e" />
          <ButtonOption title="Event" Icon={EventIcon} color="#e7a33e" />
          <ButtonOption
            title="Write Article"
            Icon={ArticleIcon}
            color="#fa948d"
          />
        </div>
      </div>
      {posts.map(
        ({ id, data: { avatar, name, description, time, msg, msgImg } }) => (
          <Post
            key={id}
            avatar={avatar}
            name={name}
            description={description}
            time={time}
            msg={msg}
            msgImg={msgImg}
          />
        )
      )}
    </div>
  );
}
