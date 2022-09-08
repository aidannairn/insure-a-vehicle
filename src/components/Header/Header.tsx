import React from "react";
import "./Header.css";
import logoImg from "../../images/turnerscars_logo_1line_horz_true-rgb-desktop.png";
import PersonIcon from "../../images/Person.png";
import PhoneIcon from "../../images/header-phone.png";
import LocationOnIcon from "../../images/Place Marker.png";
import { Link } from "react-router-dom";
import { leftMenuItems } from "./leftMenuItems";
import { MenuItems } from "./MenuItems";

interface HeaderProps {
  isInsurance?: true
}

export const Header: React.FC<HeaderProps> = ({ isInsurance }) => {
  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/">
            <img src={logoImg} className="logo" alt="turners-logo" />
          </Link>
        </div>
        <div className="header-content">
          {
            !isInsurance &&
            <div className="account-panel">
              <img src={PersonIcon} className="person-icon" />
              <a className="login">Login</a>
              <span className="or">Or</span>
              <a className="register">Register</a>
            </div>
          }
          <a href="tel:0800 887 637" className="phone-number">
            <img src={PhoneIcon} className="phone-icon" />
          </a>
          <a href="" className="find-us">
            <img src={LocationOnIcon} className="location-icon" />
          </a>
        </div>
      </div>
      {
        !isInsurance &&
        <nav className="main-menu">
        <div className="content">
          <ul className="left-menu">
            {leftMenuItems.map((menu, index) => {
              const depthLevel = 0;
              return <MenuItems items={menu} key={index} depthLevel={depthLevel}/>;
            })}
          </ul>
          <ul className="right-menu">
            <li>Auctions</li>
            <li>Service & Info</li>
          </ul>
        </div>
      </nav>
      }
    </header>
  );
};
