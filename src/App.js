import "./App.css";
import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import Random from "./components/Random/Random";
import Search from "./components/Search/Search";
import Game from "./components/Game/Game";
import Archetypes from "./Archetypes/Archetypes";
import ArchetypeDisplay from "./Archetypes/ArchetypeDisplay/ArchetypeDisplay";
import Navigation from "./Navigation/Navigation";
import Modal from "./Navigation/Modal/Modal";
import ModalButton from "./Navigation/ModalButton/ModalButton";
import { debounce } from "./HelperFunctions/HelperFunctions";
function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpen2, setIsOpen2] = useState(false);
  const [initialModal2, setInitialModal2] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", debounce(handleResize, 100));
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
                {width <= 600 ? (
                  <ModalButton
                    toggle={setIsOpen2}
                    setInitialModal={setInitialModal2}
                    current={isOpen2}
                  />
                ) : null}
                {width <= 600 ? (
                  <Modal open={isOpen2} initialModal={initialModal2}></Modal>
                ) : null}
              </Fragment>
            }
          />
          <Route
            path="/game/"
            element={
              <Fragment>
                <Navigation />
                <Home />
                {width <= 600 ? (
                  <ModalButton
                    toggle={setIsOpen2}
                    setInitialModal={setInitialModal2}
                    current={isOpen2}
                  />
                ) : null}
                {width <= 600 ? (
                  <Modal open={isOpen2} initialModal={initialModal2}></Modal>
                ) : null}
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
