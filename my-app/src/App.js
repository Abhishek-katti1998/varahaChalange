import logo from "./logo.svg";
import "./App.css";
import Wrapper from "./components/wrapper";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Wrapper />}></Route>
        </Routes>
        <Routes>
          <Route path="/dash1" element={<Wrapper />}></Route>
        </Routes>
        <Routes>
          <Route path="/dash2" element={<Wrapper />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
