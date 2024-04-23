import React from "react";
import "./MainNavigation.css";

import logo from "../assets/logo.png";

const MainNavigation = () => {
  return (
    <div className="nav-wrapper">
      <div className="logo-link-wrapper">
        <img src={logo} />
        <span className="nav-links">
          <a>Home</a>
          <a style={{ fontWeight: 700, color: "#3A643B" }}>Find Doctors</a>
          <a>About Us</a>
        </span>
      </div>
      <div className="auth-link-wrapper">
        <a
          style={{
            border: "1px solid #3A643B",
            color: "#3A643B",
            // padding: "11px 37px 16px 37px",
            width: "118px",
            height: "56px",
          }}
        >
          Login
        </a>
        <a
          style={{
            // padding: "16px 39px 20px 39px",
            backgroundColor: "#3A643B",
            color: "#FFFFFF",
            width: "163px",
            height: "56px",
          }}
        >
          Sign-up
        </a>
      </div>
    </div>
  );
};

export default MainNavigation;
