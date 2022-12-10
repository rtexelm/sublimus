import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import SplashPage from "./components/SplashPage";
import FilmIndexPage from "./components/FilmIndexPage";
import FilmShowPage from "./components/FilmShowPage";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/films">
          <FilmIndexPage />
        </Route>
        <Route path="/films/:filmId">
          <FilmShowPage />
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
