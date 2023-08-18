import React from "react";

import { NameContext } from "../App";
import Button from "./Button";

const SubmitButton = () => {
  const { name } = React.useContext(NameContext);

  const handleClick = () => {
    alert(`Hello ${name}!`);
    // Add your logic here
  };

  return (
    <div onClick={handleClick}>
      <Button text={"Submit"} />
    </div>
  );
};

export default SubmitButton;
