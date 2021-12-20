import React, { useState } from "react";
import "./components.css";

export default function Home() {
  const [boxShadow, setBoxShadow] = useState("0px 0px 20px 0px skyblue");

  return (
    <>
      <div className="container">
        <img
          src={require("../static/Images/Ampplex-Logo_1.png")}
          width={"40%"}
          height={"40%"}
          alt="Ampplex Logo"
          draggable="false"
        />

        <h1 className="theme">We are made to create somthing new</h1>

        <div>
          <h2 className="app">Download Ampplex app</h2>
          <div
            style={{
              width: "50%",
              height: "40%",
              backgroundColor: "#fafafa",
              borderRadius: 100,
              boxShadow: boxShadow,
              margin: "auto",
              marginBottom: 100,
              marginTop: 50,
            }}
            onMouseEnter={() => {
              setBoxShadow("0px 0px 35px 0px skyblue");
            }}
            onMouseLeave={() => {
              setBoxShadow("0px 0px 20px 0px skyblue");
            }}
          >
            <a
              href="https://firebasestorage.googleapis.com/v0/b/ampplex-75da7.appspot.com/o/Ampplex-19c0ce4a88614e779fc42307d1bd846d-signed.apk?alt=media&token=bb4b3839-1316-4f97-9284-9490bdeb04a1"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <h2
                className="download"
                style={{
                  textAlign: "center",
                  maxLines: 1,
                  fontWeight: "bold",
                }}
              >
                Download
              </h2>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
