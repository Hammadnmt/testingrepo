import React from "react";

function Button({ onClick, desc }) {
  return <button onClick={onClick}>{desc}</button>;
}

export default Button;
