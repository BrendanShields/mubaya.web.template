import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Persona, Welcome } from "Containers";

const App = () => {

  return (
    <div className="App">
      <Router>
        <Route path="/">
          <Welcome />
        </Route>
        <Route path="/Test">
                  <Persona />
        </Route>
        <Route path="/users">test</Route>

      </Router>
    </div>
  );
};

export default App;
