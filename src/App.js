import logo from "./logo.svg";
import "./App.css";
import OTTPlatform from "./components/OTTPlatform";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ott" element={<OTTPlatform />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
