import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleEquals = () => {
    try {
      setResult(eval(input)); // Avalia a expressão do input
    } catch (error) {
      setResult("Erro");
    }
  };

 

  return (
    <div className="calculadora">
      <div className="display">
        <div className="input">{input || "0"}</div>
        <div className="result">{result || ""}</div>
      </div>
      <div className="buttons">
        <button className="clear" onClick={handleClear}>
          C
        </button>
        <button onClick={() => handleClick("(")}> ( </button>
        <button onClick={() => handleClick(")")}> ) </button>
        <button className="operator" onClick={() => handleClick("/")}>
          /
        </button>
        <button onClick={() => handleClick("7")}> 7 </button>
        <button onClick={() => handleClick("8")}> 8 </button>
        <button onClick={() => handleClick("9")}> 9 </button>
        <button className="operator" onClick={() => handleClick("*")}>
          *
        </button>
        <button onClick={() => handleClick("4")}> 4 </button>
        <button onClick={() => handleClick("5")}> 5 </button>
        <button onClick={() => handleClick("6")}> 6 </button>
        <button className="operator" onClick={() => handleClick("-")}>
          -
        </button>
        <button onClick={() => handleClick("1")}> 1 </button>
        <button onClick={() => handleClick("2")}> 2 </button>
        <button onClick={() => handleClick("3")}> 3 </button>
        <button className="operator" onClick={() => handleClick("+")}>
          +
        </button>
        <button onClick={() => handleClick("0")}> 0 </button>
        <button onClick={() => handleClick(".")}> . </button>
        <button className="equal" onClick={handleEquals}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
