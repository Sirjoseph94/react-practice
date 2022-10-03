// import Home from './components/practiceuseState'
// import Timer from "./components/practiceUseEffect.js"
import { useState } from "react";
import PracticeUseRef from "./components/useRef/practiceUseRef.js";
import Table from "./components/useRef/practiceuseRefTable";
import { Routes, Route } from "react-router-dom";
import { Context } from "./context/contextCreator";

function App() {
  const [user, setUser] = useState('Elias Imokhai');
  return (
    <Context.Provider value={{user,setUser}} > 
      <div className="App">
        <Routes>
          <Route path="/" element={<PracticeUseRef />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </div>
    </Context.Provider  >
  );
}

export default App;
