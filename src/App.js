import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import FormAPI from "./containers/FormAPI";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/main">
          <FormAPI />
        </Route>
      </Switch>
        <Redirect from="/" to="/main" />
    </Router>
  );
}

export default App;
