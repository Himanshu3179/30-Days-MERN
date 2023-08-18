import React from "react";
import { NameContext } from "../App";
const InputFeild = () => {
  const inputStyle = {
    backgroundColor: "#4B4453",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    outline: "none",
    fontWeight: "bold",
    fontSize: "20px",
  };

  const { name, setName } = React.useContext(NameContext);

  return (
    <input
      style={inputStyle}
      value={name}
      onChange={(e) => {
        setName(e.target.value);
      }}
      type="text"
      placeholder="Enter your name"
    />
  );
};

export default InputFeild;
