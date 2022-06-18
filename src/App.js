import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import Random from "./components/Random/Random";
import Search from "./components/Search/Search";
import Game from "./components/Game/Game";
import Archetypes from "./Archetypes/Archetypes";
import ArchetypeDisplay from "./Archetypes/ArchetypeDisplay/ArchetypeDisplay";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/game/" element={<Home />} />
          <Route path="/game/random/" element={<Random />} />
          <Route path="/game/search/" element={<Search />} />
          <Route path="/game/game/" element={<Game />} />
          <Route path="/game/archetypes/" element={<Archetypes />} />
          <Route
            path="/game/archetypes/:archetypes"
            element={<ArchetypeDisplay />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
