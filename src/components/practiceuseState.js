import React, { useState } from "react";
import "./homeStyle.css";

const Home = ({ carName }) => {
  const [color, setColor] = useState("red");

  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: "blue" };
    });
  };
  return (
    <>
      {/* <h1>My favourite color is <span className={color} >{color}</span></h1>
      <button type='button' onClick={()=>setColor('blue')} >You color</button> */}

      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}
      </p>
      <button type="button" onClick={updateColor}>
        Blue
      </button>
    </>
  );
};

export default Home;
