import { Avatar } from "@mui/material";
import ButtonOption from "./ButtonOption";
import "./post.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatIcon from "@mui/icons-material/Chat";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import SendIcon from "@mui/icons-material/Send";
import { forwardRef } from "react";
const Post = forwardRef(
  ({ avatar, name, description, time, msg, msgImg }, ref) => {
    return (
      <div className="post__container" ref={ref}>
        <div className="post__profile">
          <Avatar src={avatar} className="avatar">
            {" "}
            {name[0].toUpperCase()}
          </Avatar>
          <div className="post__profileDetail">
            <h5>{name}</h5>
            <p>{description}</p>
            <p>{time}</p>
          </div>
        </div>
        <div className="post__msg">{msg}</div>
        {msgImg && (
          <div className="post__image">
            <img src={msgImg} alt="" />
          </div>
        )}
        <div className="post__options">
          <ButtonOption title="Like" Icon={ThumbUpIcon} color="gray" />
          <ButtonOption title="Comment" Icon={ChatIcon} color="gray" />
          <ButtonOption title="Share" Icon={ReplyAllIcon} color="gray" />
          <ButtonOption title="Send" Icon={SendIcon} color="gray" />
        </div>
      </div>
    );
  }
);

export default Post;
