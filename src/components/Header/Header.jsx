import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Resources/Logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="container">
        <div className="flex-1">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              {" "}
              <NavLink to="/">Home</NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="/donation">Donation</NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="/statistics">Statistics</NavLink>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
