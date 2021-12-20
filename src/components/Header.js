import React from "react";
import { Link } from "react-router-dom";
import "./components.css";

const Header = (props) => {
  return (
    <>
      <div
        className="header"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="header-logo">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <img
              src={require("../static/Images/Ampplex-logo.png")}
              draggable="false"
              width={80}
              height={80}
              alt="Ampplex Logo"
              onMouseEnter={() => {
                console.log("hover");
              }}
              style={{
                position: "absolute",
                top: 0,
                left: 20,
              }}
            />
            <div className="Title">
              <h1 className="Title-text">Ampplex</h1>
            </div>
          </Link>
          <div className="Home">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <h2 className="home">Home</h2>
            </Link>
          </div>

          <div className="About">
            <Link
              to="/about"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <h2 className="about">About</h2>
            </Link>
          </div>
        </div>
        <div className="breakPoint" />
      </div>
    </>
  );
};

export default Header;
