import React from "react";
import "./components.css";
import Lottie from "lottie-react";

export default function Home() {
  const images = [
    { url: require("../Ampplex-app-screenshots/1.png") },
    { url: require("../Ampplex-app-screenshots/2.png") },
    { url: require("../Ampplex-app-screenshots/3.png") },
    { url: require("../Ampplex-app-screenshots/4.png") },
    { url: require("../Ampplex-app-screenshots/5.png") },
    { url: require("../Ampplex-app-screenshots/6.png") },
    { url: require("../Ampplex-app-screenshots/7.png") },
    { url: require("../Ampplex-app-screenshots/8.png") },
    { url: require("../Ampplex-app-screenshots/9.png") },
    { url: require("../Ampplex-app-screenshots/10.png") },
  ];

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  window.addEventListener("scroll", () => {
    console.log(window.pageYOffset);
  });

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
            className="Download-btn"
            style={{
              width: "50%",
              height: "40%",
              backgroundColor: "#fafafa",
              borderRadius: 100,
              margin: "auto",
              marginBottom: 100,
              marginTop: 50,
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

        <h1
          style={{
            fontSize: 50,
            fontWeight: "bold",
          }}
        >
          Watch educational content without any distractions.
        </h1>

        <Lottie animationData={require("../static/lottie/study.json")} />

        <div className="one">
          <div
            style={{
              marginTop: 200,
              borderRadius: 100,
            }}
            className="Image1"
          >
            <img
              className="img1"
              src={require("../Ampplex-app-screenshots/1.png")}
              alt="img1"
              style={{
                width: 400,
                height: 700,
                borderRadius: 20,
              }}
              draggable="false"
            />
          </div>
        </div>

        <h1
          style={{
            fontSize: 50,
            fontWeight: "bold",
            marginTop: 100,
          }}
        >
          Profile
        </h1>
        <div className="one">
          <div
            style={{
              marginTop: 150,
              borderRadius: 100,
            }}
            className="Image1"
          >
            <img
              className="img1"
              src={require("../Ampplex-app-screenshots/2.png")}
              alt="img1"
              style={{
                width: 400,
                height: 700,
                borderRadius: 20,
              }}
              draggable="false"
            />
          </div>
        </div>

        <h1
          style={{
            fontSize: 50,
            fontWeight: "bold",
            marginTop: 100,
          }}
        >
          Edit your profile
        </h1>
        <div className="one">
          <div
            style={{
              marginTop: 150,
              borderRadius: 100,
            }}
            className="Image1"
          >
            <img
              className="img1"
              src={require("../Ampplex-app-screenshots/3.png")}
              alt="img1"
              style={{
                width: 400,
                height: 700,
                borderRadius: 20,
              }}
              draggable="false"
            />
          </div>
        </div>

        <h1
          style={{
            fontSize: 50,
            fontWeight: "bold",
            marginTop: 100,
          }}
        >
          Search for users
        </h1>
        <div className="one">
          <div
            style={{
              marginTop: 150,
              borderRadius: 100,
            }}
            className="Image1"
          >
            <img
              className="img1"
              src={require("../Ampplex-app-screenshots/4.png")}
              alt="img1"
              style={{
                width: 400,
                height: 700,
                borderRadius: 20,
              }}
              draggable="false"
            />
          </div>
        </div>

        <h1
          style={{
            fontSize: 50,
            fontWeight: "bold",
            marginTop: 100,
          }}
        >
          Ampplex Shorts
        </h1>
        <div className="one">
          <div
            style={{
              marginTop: 150,
              borderRadius: 100,
            }}
            className="Image1"
          >
            <img
              className="img1"
              src={require("../Ampplex-app-screenshots/5.png")}
              alt="img1"
              style={{
                width: 400,
                height: 700,
                borderRadius: 20,
              }}
              draggable="false"
            />
          </div>
        </div>

        <div className="one">
          <div
            style={{
              marginTop: 150,
              borderRadius: 100,
            }}
            className="Image1"
          >
            <img
              className="img1"
              src={require("../Ampplex-app-screenshots/6.png")}
              alt="img1"
              style={{
                width: 400,
                height: 700,
                borderRadius: 20,
              }}
              draggable="false"
            />
          </div>
        </div>

        <h1
          style={{
            fontSize: 40,
            fontWeight: "bold",
            marginTop: 100,
          }}
        >
          Report or block user if you found that the content is inappropriate
          for childrens
        </h1>
        <div className="one">
          <div
            style={{
              marginTop: 150,
              borderRadius: 100,
            }}
            className="Image1"
          >
            <img
              className="img1"
              src={require("../Ampplex-app-screenshots/7.png")}
              alt="img1"
              style={{
                width: 400,
                height: 700,
                borderRadius: 20,
              }}
              draggable="false"
            />
          </div>
        </div>

        <h1
          style={{
            fontSize: 40,
            fontWeight: "bold",
            marginTop: 100,
          }}
        >
          Express your experience
        </h1>
        <div className="one">
          <div
            style={{
              marginTop: 150,
              borderRadius: 100,
            }}
            className="Image1"
          >
            <img
              className="img1"
              src={require("../Ampplex-app-screenshots/8.png")}
              alt="img1"
              style={{
                width: 400,
                height: 700,
                borderRadius: 20,
              }}
              draggable="false"
            />
          </div>
        </div>

        <h1
          style={{
            fontSize: 40,
            fontWeight: "bold",
            marginTop: 100,
          }}
        >
          Login to be a part of Ampplex
        </h1>
        <div className="one">
          <div
            style={{
              marginTop: 150,
              borderRadius: 100,
            }}
            className="Image1"
          >
            <img
              className="img1"
              src={require("../Ampplex-app-screenshots/10.png")}
              alt="img1"
              style={{
                width: 400,
                height: 700,
                borderRadius: 20,
              }}
              draggable="false"
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <p
          style={{
            color: "white",
            textAlign: "center",
          }}
        >
          Copyright © 2021 Ampplex contact us : team.amplex@gmail.com
        </p>
      </div>
    </>
  );
}
