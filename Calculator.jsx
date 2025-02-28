import { useState } from "react";
import "./Cal.css";

const Calculator = () => {
    const [number, setNumber] = useState("");

    const handleClick = (value) => {
        setNumber((prev) => prev + value);
    };


    const calculate = () => {
        try {
            setNumber(eval(number).toString());
        } catch {
            setNumber("Error");
        }
    };

    return (
          <div className="calculator">

            <input type="text" value={number} readOnly />

            <div>
                 <button onClick={() => setNumber("")}>AC</button>
                <button onClick={() => setNumber(number.slice(0, -1))}>CLR</button>
                <button onClick={() => handleClick("%")}>%</button>
                 <button onClick={() => handleClick("/")}>/</button>
            </div>


            <div>

                <button onClick={() => handleClick("7")}>7</button>
                <button onClick={() => handleClick("8")}>8</button>
                <button onClick={() => handleClick("9")}>9</button>
                <button onClick={() => handleClick("*")}>*</button>
            </div>

            <div>
                <button onClick={() => handleClick("4")}>4</button>
                <button onClick={() => handleClick("5")}>5</button>
                <button onClick={() => handleClick("6")}>6</button>
                <button onClick={() => handleClick("-")}>-</button>

            </div>

            <div>

                <button onClick={() => handleClick("1")}>1</button>
                <button onClick={() => handleClick("2")}>2</button>
                <button onClick={() => handleClick("3")}>3</button>
                <button onClick={() => handleClick("+")}>+</button>
            </div>

            <div>
                <button onClick={() => setNumber("00")}>00</button>
                <button onClick={() => handleClick("0")}>0</button>
                <button onClick={() => handleClick(".")}>.</button>
                <button onClick={calculate}>=</button>
            </div>
        </div>
    );
};

export default Calculator;
