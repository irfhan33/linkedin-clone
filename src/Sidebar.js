import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./sidebar.css";
export default function Sidebar() {
  const user = useSelector(selectUser);
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <div className="sidebar__profil">
          <img
            src="https://images.unsplash.com/photo-1547974486-cf573b27fe2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <Avatar src={user.photoURL} className="sidebar__avatar">
            {user.email[0].toUpperCase()}
          </Avatar>
          <h2>{user.displayName}</h2>
          <h4>{user.email}</h4>
        </div>
        <div className="sidebar__connection">
          <h3>Connections</h3>
          <p>Grow your connection</p>
        </div>
        <div className="sidebar__subscription">
          <span>Acces exclusive tools & insight</span>
          <h5>Try Premium for free</h5>
        </div>
        <div className="sidebar__myitems">My Items</div>
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar_bottomItems">
          <div className="sidebar_bottomItem">Groups</div>
          <div className="sidebar_bottomItem">Events</div>
          <div className="sidebar_bottomItem">Followed Hashtag</div>
        </div>
        <div className="sidebar_discover">Discover more</div>
      </div>
    </div>
  );
}
