import "./Card.scss";
import Counter from "../Counter/Counter.jsx";

const Card = () => {
    return (
        <div className="card">
            <h3 className="card__content">Name</h3>
            <h3 className="card__content">Role</h3>
            <Counter />
        </div>
    );
};

export default Card;