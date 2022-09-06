import React from "react";
import "./Header.css";
import logoImg from "../../images/turnerscars_logo_1line_horz_true-rgb-desktop.png";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "../../images/Person.png";
import PhoneIcon from "../../images/header-phone.png";
import LocationOnIcon from "../../images/Place Marker.png";
import { Link } from "react-router-dom";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <Link to='/'><img src={logoImg} className="logo" alt="turners-logo" /></Link>
        </div>
        <div className="header-content">
          <div className="account-panel">
            <img src={PersonIcon} className="person-icon" />
            <a className="login">Login</a>
            <span className="or">Or</span>
            <a className="register">Register</a>
          </div>
          <a href="tel:0800 887 637" className="phone-number">
            <img src={PhoneIcon} className="phone-icon" />
          </a>
          <a href="" className="find-us">
            <img src={LocationOnIcon} className="location-icon" />
          </a>
        </div>
      </div>
      <nav className="main-menu">
        <div className="content">
          <ul className="left-menu">
            <li>
              <SearchIcon className="search-icon" fontSize="medium" />
              Find a Car
            </li>
            <li>Buy a Car</li>
            <li>Sell your Car</li>
            <li>Finance</li>
            <li>
              <Link to="/insurance">Insurance</Link>
            </li>
          </ul>
          <ul className="right-menu">
            <li>Auctions</li>
            <li>Service & Info</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
