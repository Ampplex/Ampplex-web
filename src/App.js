import "./App.css";
import React from "react";
import Header from "./components/Header.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/about";
import "./App.css";

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
