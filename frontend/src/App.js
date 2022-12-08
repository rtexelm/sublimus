import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import SplashPage from "./components/SplashPage";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
        <Route exact path="/">
          <SplashPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
