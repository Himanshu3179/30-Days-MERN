import React from "react";

function DisplayProps({ arr }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // border: "1px solid black",
        padding: "10px",
        borderRadius: "10px",
        backgroundColor: "#845EC2",
        color: "white",
        boxShadow: "0px 0px 10px 1px black",
      }}
    >
      <h1 style={{ marginBottom: "10px" }}>Displaying Props</h1>
      {arr.map((item, index) => {
        return <h4 key={index}>{item}</h4>;
      })}
    </div>
  );
}

export default DisplayProps;
