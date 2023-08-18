import React from "react";

const Button = (props) => {
  const buttonStyle = {
    backgroundColor: "#4B4453",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "20px",
  };

  return <button style={buttonStyle}>{props.text}</button>;
};

export default Button;
