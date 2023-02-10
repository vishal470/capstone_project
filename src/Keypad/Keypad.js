import React, { useState } from "react";
import "./Keypad.css";

function Keypad() {
  const [current, setCurrent] = useState("");
  const [previous, setPrevious] = useState("");
  const [operation, setOperation] = useState("");


  const clickHandler = (el) => {
    const value = el.target.getAttribute("data");
    if (value === "." && current.includes(".")) return;
    setCurrent(current + value);
  };

  const deleteHandler = () => {
    setCurrent(String(current).slice(0, -1));
  };

  const allClear = () => {
    setCurrent("");
    setOperation("");
    setPrevious("");
  };

  const chooseOperation= (el) => {
    if (current === "") return;
    if (previous !== "") {
      let value = compute();
      setPrevious(value);
    } else {
      setPrevious(current);
    }
    setCurrent("");
    setOperation(el.target.getAttribute("data"));
  };

  const equalHandler = () => {
    let value = compute();
    if (value === undefined || value == null) return;
    setCurrent(value);
    setPrevious("");
    setOperation("");
  };

  const compute = () => {
    let result;
    let previousNumber = parseFloat(previous);
    let currentNumber = parseFloat(current);
    if (isNaN(previousNumber) || isNaN(currentNumber)) return;
    switch (operation) {
      case "÷":
        result = previousNumber / currentNumber;
        break;
      case "x":
        result = previousNumber * currentNumber;
        break;
      case "+":
        result = previousNumber + currentNumber;
        break;
      case "-":
        result = previousNumber - currentNumber;
        break;
      default:return
    }
    return result;
  };

  return (
    <div>
      <div className="header">
        <div className="header_expression">
          <p>
            {previous} {operation}
          </p>
        </div>
        <p className="header_result">{current}</p>
      </div>
      <div className="keypad">
        <button onClick={allClear} className="allClear">
          AC
        </button>
        <button onClick={deleteHandler}>⮈</button>
        <button data={"÷"} onClick={chooseOperation} operation>
          ÷
        </button>
        <button data={7} onClick={clickHandler}>
          7
        </button>
        <button data={8} onClick={clickHandler}>
          8
        </button>
        <button data={9} onClick={clickHandler}>
          9
        </button>
        <button data={"x"} onClick={chooseOperation} operation>
          x
        </button>
        <button data={4} onClick={clickHandler}>
          4
        </button>
        <button data={5} onClick={clickHandler}>
          5
        </button>
        <button data={6} onClick={clickHandler}>
          6
        </button>
        <button data={"+"} onClick={chooseOperation} operation>
          +
        </button>
        <button data={1} onClick={clickHandler}>
          1
        </button>
        <button data={2} onClick={clickHandler}>
          2
        </button>
        <button data={3} onClick={clickHandler}>
          3
        </button>
        <button data={"-"} onClick={chooseOperation} operation>
          -
        </button>
        <button data={"."} onClick={clickHandler}>
          .
        </button>
        <button className="zero" data={0} onClick={clickHandler}>
          0
        </button>
        <button className="equal" onClick={equalHandler}>
          =
        </button>
      </div>
    </div>
  );
}

export default Keypad;
