import { Avatar } from "@mui/material";
import "./HeaderOption.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

export default function HeaderOption({ Icon, title, avatar, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div className="headerOption" onClick={onClick}>
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon" src={user?.photoURL}>
          {user?.email[0].toUpperCase()}
        </Avatar>
      )}
      <h3>{title}</h3>
    </div>
  );
}
