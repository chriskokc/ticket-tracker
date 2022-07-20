import "./Card.scss";
import Counter from "../Counter/Counter.jsx";

const Card = ({ employeeName, employeeRole }) => {
    return (
        <>
            <h3 className="card__content"><span className="card__content--name">{employeeName}</span></h3>
            <h3 className="card__content"> <span className="card__content--role"><em>{employeeRole}</em></span></h3>
            <Counter />
        </>
    );
};

export default Card;