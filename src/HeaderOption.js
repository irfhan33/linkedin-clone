import { Avatar } from "@mui/material";
import "./HeaderOption.css";

export default function HeaderOption({ Icon, title, avatar }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}
      <h3>{title}</h3>
    </div>
  );
}
