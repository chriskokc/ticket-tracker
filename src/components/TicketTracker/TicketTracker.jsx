import Card from "../Card/Card";
import "./TicketTracker.scss";

const TickerTracker = () => {
    return (
        <div className="ticker-tracker">
            <h1 className="big-title">Ticket Tracker</h1>
            <div className="ticker-tracker__container">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            
        </div>
        
    );
};

export default TickerTracker;