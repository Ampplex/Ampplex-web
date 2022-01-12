import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./components.css";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="header"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div className="header-logo">
          <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </div>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <img
              src={require("../static/Images/Ampplex-logo.png")}
              draggable="false"
              width={80}
              height={80}
              alt="Ampplex Logo"
              style={{
                position: "absolute",
                top: 0,
                left: "100px",
              }}
            />
            <div className="Title">
              <h1
                className="Title-text"
                style={{
                  position: "absolute",
                  top: 0,
                  left: "70px",
                }}
              >
                Ampplex
              </h1>
            </div>
          </Link>
        </div>
        {isOpen ? (
          <>
            <Link to="/">
              <div className="home">
                <h2
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    color: "black",
                    marginTop: "10px",
                  }}
                >
                  Home
                </h2>
              </div>
            </Link>
            <Link to="/about">
              <div className="about">
                <h2
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    color: "black",
                    marginTop: "10px",
                  }}
                >
                  About
                </h2>
              </div>
            </Link>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Header;
