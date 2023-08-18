import React from "react";
import Button from "./Button";

const CounterButton = () => {
  const [count, setCount] = React.useState(0);

  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <div onClick={handleDecrement}>
        <Button text={" - "} />
      </div>
      <div style={{ fontSize: "25px" ,fontWeight:"bold",fontFamily:"monospace"}}>{count}</div>
      <div onClick={handleIncrement}>
        <Button text={" + "} />
      </div>
    </div>
  );
};

export default CounterButton;
