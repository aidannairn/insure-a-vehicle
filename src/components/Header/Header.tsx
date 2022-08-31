import React from "react";
import './Header.css';
import logoImg from "../../images/turnerscars_logo_1line_horz_true-rgb-desktop.png";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <img src={logoImg} className="logo" alt="turners-logo" />
        </div>
        <div className="header-content">
          <div className="account-panel">
            <PersonIcon fontSize="medium" className="person-icon"/>
            <a className="login">Login</a>
            <span className="or">Or</span>
            <a className="register">Register</a>
          </div>
          <a href="tel:0800 887 637" className="phone-number"><PhoneIcon fontSize="medium" className="phone-icon"/></a>
          <a href="" className="find-us"><LocationOnIcon fontSize="medium" className="location-icon"/></a>
        </div>
      </div>
      <nav className="main-menu">
        <div className="content">
          <ul className="left-menu">
            <li><SearchIcon className="search-icon" fontSize="medium"/>Find a Car</li>
            <li>Buy a Car</li>
            <li>Sell your Car</li>
            <li>Finance</li>
            <li>Insurance</li>
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
