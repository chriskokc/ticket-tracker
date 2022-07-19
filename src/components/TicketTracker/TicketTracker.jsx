import Card from "../Card/Card";
import "./TicketTracker.scss";
import team from "../../team.js";

const TickerTracker = () => {

    const employeesJSX = team.map(employee => {
        return <Card employeeName={employee.name} employeeRole={employee.role} employeeKey={employee.id}/>
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