import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./firebaseConfig";

export default function Header() {
  const dispatch = useDispatch();
  const logoutFromApp = () => {
    dispatch(logout);
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1645928350~hmac=62b8b819f943cdb3a5aa85d677c1d32f"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" name="" id="" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOption title="Message" Icon={ChatIcon} />
        <HeaderOption title="Notifications" Icon={NotificationsIcon} />
        <HeaderOption onClick={logoutFromApp} title="Me" avatar="true" />
      </div>
    </div>
  );
}
