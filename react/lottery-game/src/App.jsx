import "./App.css";
import Lottery from "./Lottery";
import { sum } from "./helper";

function App() {
    let winCondition = (ticket) => {
        // return sum(ticket) === 15;//summation == 15
        return ticket.every((num) => num === ticket[0]);//every number same
    };

    return (
        <>
            <Lottery n={3} winCondition={winCondition}></Lottery>
        </>
    );
}

export default App;
