import "./App.css";
import React from "react";
import Header from "./components/Header.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/about";
import "./App.css";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCQmm-9Zt8Myx9k4J1oHqv19-SO3xeMxZs",
//   authDomain: "ampplex-website.firebaseapp.com",
//   projectId: "ampplex-website",
//   storageBucket: "ampplex-website.appspot.com",
//   messagingSenderId: "805815349209",
//   appId: "1:805815349209:web:e2af793fa520441fb3b3c8",
//   measurementId: "G-R8KQHBJS6H",
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
