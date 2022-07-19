import Card from "../Card/Card";
import "./TicketTracker.scss";
import team from "../../team.js";

const TickerTracker = () => {

    const employeesJSX = team.map(employee => {
        return (
            <div className="card" key={employee.id}>
                <Card employeeName={employee.name} employeeRole={employee.role}/> 
            </div>
        )
    });

    return (
        <div className="ticker-tracker">
            <h1 className="big-title">Ticket Tracker</h1>

            <div className="ticker-tracker__container">
                {employeesJSX}
            </div>
        </div>
    );
};

export default TickerTracker;