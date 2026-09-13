import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CountryResults from "./pages/CountryResults.jsx";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sihtkoht/:country" element={<CountryResults />} />
    </Routes>
  );
}

export default App;
