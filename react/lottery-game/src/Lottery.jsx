import { useState } from "react";
import { genTicket } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n = 3, winCondition }) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(genTicket(n));
    };

    return (
        <div>
            <h1>Lottery Game</h1>
            <button onClick={buyTicket}>Generate New Ticket</button>
            <br />
            <br />
            <hr />
            <br />
            <Ticket ticket={ticket}></Ticket>
            <h3>{isWinning && "Congratulations! you won!!"}</h3>
        </div>
    );
}
