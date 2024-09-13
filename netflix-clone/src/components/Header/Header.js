import React from 'react'
import "./Header.css"
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import netflixlog from "../../assets/images/netflixlogo.png"
const Header = () => {
  return (
    <div className="header-outer-container">
      <div className="header-container">
        <div className="header-left">
          <ul>
            <li><img src={netflixlog} alt='Netflix Logo' width="100"/></li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latests</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header-right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header

// summary
// what I was learned from Header.js
// *uses to set header-leftlists
// *uses to set header-right icons from material icons through npm installing material icons
// *uses to set netflix logo through image assistance application