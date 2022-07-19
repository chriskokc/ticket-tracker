import "./Counter.scss";
import Button from "../Button/Button.jsx";

const Counter = () => {
    return (
        <div className="counter">
            <h3 className="counter__title">Counter</h3>
            <h3 className="counter__value">0</h3>
            <Button buttonText="-" isMinus={true} />
            <Button buttonText="+" isMinus={false} />
        </div>
    );
};

export default Counter;