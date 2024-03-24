import "./App.css";
import { useState } from "react";

export default function App() {
  // let count = 0;

  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }

  function subtract() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            subtract();
            console.log("🤔");
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            add();
            console.log("🤔");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
