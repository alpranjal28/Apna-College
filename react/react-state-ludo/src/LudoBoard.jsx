import { useState } from "react";

export default function LudoBoard() {
    let [moves, setMoves] = useState({ r: 0, g: 0, b: 0, y: 0 });
    let [count, setCount] = useState(0);

    function updateRed() {
        setMoves((prevMoves) => {
            return { ...prevMoves, r: prevMoves.r + 1 };
        });
    }
    function updateBlue() {
        setMoves((prevMoves) => {
            return { ...prevMoves, b: prevMoves.b + 1 };
        });
    }
    function updateGreen() {
        setMoves((prevMoves) => {
            return { ...prevMoves, g: prevMoves.g + 1 };
        });
    }
    function updateYellow() {
        setMoves((prevMoves) => {
            return { ...prevMoves, y: prevMoves.y + 1 };
        });
    }

    return (
        <div>
            <p>Game Begins!</p>
            <div>
                <p>Red's {moves.r}</p>
                <button
                    style={{ backgroundColor: "red", color: "black" }}
                    onClick={updateRed}
                >
                    +1
                </button>
                <p>Green's {moves.g}</p>
                <button
                    style={{ backgroundColor: "green", color: "black" }}
                    onClick={updateGreen}
                >
                    +1
                </button>
                <p>Blue's {moves.b}</p>
                <button
                    style={{ backgroundColor: "blue", color: "black" }}
                    onClick={updateBlue}
                >
                    +1
                </button>
                <p>Yellow's {moves.y}</p>
                <button
                    style={{ backgroundColor: "yellow", color: "black" }}
                    onClick={updateYellow}
                >
                    +1
                </button>
            </div>
        </div>
    );
}
