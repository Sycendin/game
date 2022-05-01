import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/game/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
