import React from "react";
import "bulma";
import { BrowserRouter as Router, Switch, Route, Link, params } from "react-router-dom";
import Register from "./components/authentication/Register"
import Login from "./components/authentication/Login"
import Logout from "./components/authentication/Logout"
import ForgotPassword from "./components/authentication/ForgotPassword"
import ResetPassword from "./components/authentication/ResetPassword"
import Home from "./components/home/Home"

function App() {
  return (
    <div className="App">
    <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
          
          <Route exact path="/forgotpassword">
            <ForgotPassword />
          </Route>
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPassword}
          />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;


