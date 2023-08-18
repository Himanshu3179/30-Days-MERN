import React from "react";
import DisplayProps from "./components/DisplayProps";
import InputField from "./components/InputField";
import SubmitButton from "./components/SubmitButton";
import CounterButton from "./components/CounterButton";
const NameContext = React.createContext();

function App() {
  const [name, setName] = React.useState("");
  const arr = ["Audi", "BMW", "Mercedes", "Lamborghini", "Ferrari"];
  return (
    <NameContext.Provider value={{ name, setName }}>
      <div
        style={{
          display: "flex",
          height: "100vh",
          width: "100vw",
          padding: "20px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div>
          <DisplayProps arr={arr} />
        </div>
        <div
          style={{
            display: "flex",
            gap: "5px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <InputField />
          <SubmitButton />
        </div>
        <div>
          <CounterButton />
        </div>
      </div>
    </NameContext.Provider>
  );
}

export default App;

export { NameContext };
