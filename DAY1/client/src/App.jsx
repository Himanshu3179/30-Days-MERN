/* eslint-disable no-unused-vars */
import React from "react";

const App = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    const getRequest = () => {
      fetch("http://localhost:4000/items", {
        method: "get",
      })
        .then((res) => res.text())
        .then((res) => {
          console.log(typeof res);
          console.log(res);
          const arr = JSON.parse(res);
          setItems(arr);
        });
    };
    getRequest();
  }, []);

  return (
    <div>
      {items.map((item, i) => {
        return (
          <div key={i}>
            <h1>{item}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default App;
