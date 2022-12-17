import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DialpadIcon from "@mui/icons-material/Dialpad";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png"
          alt="loading"
        />
      </div>
      <div className="header__middle">
        <div className="header__searchContainer">
          <SearchIcon />
          <input type="text" placeholder="Search mail" />
          <ArrowDropDownIcon />
        </div>
      </div>
      <div className="header__right">
        <div className="headerRightIcons">
          <HelpOutlineIcon />
          <SettingsOutlinedIcon />
          <DialpadIcon />
        </div>
        <div
          style={{
            cursor: "pointer",
          }}
        >
          <AccountCircleIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
