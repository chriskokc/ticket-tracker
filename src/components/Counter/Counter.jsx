import { useState } from "react";
import "./Counter.scss";
import Button from "../Button/Button.jsx";

const Counter = () => {
    const [ counterValue, setCounterValue ] = useState(0);

    const handleIncrement = () => {
        setCounterValue(counterValue + 1);
    };

    const handleDecrement = () => {
        setCounterValue(counterValue - 1);
        if (counterValue <= 0) {
            setCounterValue(0);
        }
    };

    return (
        <div className="counter">
            <h3 className="counter__title">Counter</h3>
            <h3 className="counter__value">{counterValue}</h3>
            <Button buttonText="-" isMinus={true} buttonFunction={handleDecrement} />
            <Button buttonText="+" isMinus={false} buttonFunction={handleIncrement}/>
        </div>
    );
};

export default Counter;