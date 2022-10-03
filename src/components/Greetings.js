import React from "react";
import "./greetstyle.css";

export default function Greetings({firstName, lastName}) {
return (
    <>
      <div className="greet">Good morning {firstName} {lastName} </div>
    </>
  );
}



export {Greetings}