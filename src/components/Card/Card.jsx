import "./Card.scss";
import Counter from "../Counter/Counter.jsx";

const Card = ({ employeeName, employeeRole , employeeKey}) => {
    return (
        <div className="card" key={employeeKey}>
            <h3 className="card__content">Name: {employeeName}</h3>
            <h3 className="card__content">Role: {employeeRole}</h3>
            <Counter />
        </div>
    );
};

export default Card;