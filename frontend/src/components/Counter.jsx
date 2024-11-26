import React, { useState } from "react";
import Button from "./Button";

export default function Counter() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <h3>Counter:{count}</h3>
      <Button onClick={handleClick} desc={"Click me"} />
    </>
  );
}
