import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import Random from "./components/Random/Random";
import Search from "./components/Search/Search";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/game/" element={<Home />} />
          <Route path="/game/random/" element={<Random />} />
          <Route path="/game/search/" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
