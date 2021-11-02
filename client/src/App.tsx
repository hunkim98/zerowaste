import "./App.css";
import { Switch, Route } from "react-router-dom";
import About from "./components/about/About";
import Admin from "./components/admin/Admin";
import Game from "./components/game/Game";
import "antd/dist/antd.css";
import Navigation from "./components/Navigation";
import React from "react";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact render={(props) => <Game {...props} />} />
        <Route path="/about" render={(props) => <About {...props} />} />
        <Route path="/admin" render={(props) => <Admin {...props} />} />
      </Switch>
    </>
  );
}

export default App;
