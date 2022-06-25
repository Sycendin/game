import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import Random from "./components/Random/Random";
import Search from "./components/Search/Search";
import Game from "./components/Game/Game";
import Archetypes from "./Archetypes/Archetypes";
import ArchetypeDisplay from "./Archetypes/ArchetypeDisplay/ArchetypeDisplay";
import Navigation from "./Navigation/Navigation";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={
              <Fragment>
                <Navigation />
                <NotFound />
              </Fragment>
            }
          />
          <Route
            path="/game/"
            element={
              <Fragment>
                <Navigation />
                <Home />
              </Fragment>
            }
          />
          <Route
            path="/game/random/"
            element={
              <Fragment>
                <Navigation />
                <Random />
              </Fragment>
            }
          />
          <Route
            path="/game/search/"
            element={
              <Fragment>
                <Navigation />
                <Search />
              </Fragment>
            }
          />
          <Route
            path="/game/game/"
            element={
              <Fragment>
                <Navigation />
                <Game />
              </Fragment>
            }
          />
          <Route
            path="/game/archetypes/"
            element={
              <Fragment>
                <Navigation />
                <Archetypes />
              </Fragment>
            }
          />
          <Route
            path="/game/archetypes/:archetypes"
            element={
              <Fragment>
                <Navigation />
                <ArchetypeDisplay />
              </Fragment>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
