// import Home from './components/practiceuseState'
// import Timer from "./components/practiceUseEffect.js"
import PracticeUseRef from "./components/useRef/practiceUseRef.js"
import Table from "./components/useRef/practiceuseRefTable"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PracticeUseRef />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </div>
  );
}

export default App;
