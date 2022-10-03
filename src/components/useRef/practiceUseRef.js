import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom'

function PracticeUseRef() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
      <Link to='/table' >Home</Link>
    </>
  );
}

export default PracticeUseRef;