import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import FormAPI from "./containers/FormAPI";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <FormAPI />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
