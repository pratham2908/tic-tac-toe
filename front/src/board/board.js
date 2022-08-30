import React, { useState, useEffect } from "react";
import { makebestmove } from "../logic/makebestmove";
import { Box } from "./Box";

const Board = () => {
    const [board, setBoard] = useState([['', '', ''], ['', '', ''], ['', '', '']]);
    const [player, setPlayer] = useState('');
    const [gameOver, setGameOver] = useState(false);
    const [movesleft, setMovesleft] = useState(9);

    function choosePlayer(e) {
        setPlayer(e.target.innerText);
    }

    function handleClick(e) {
        const row = e.target.getAttribute('row');
        const col = e.target.getAttribute('col');
        board[row][col] = player;
        setBoard([...board]);
    }

    return (
        <div>
            <div className="board">
                {board.map((row, i) => {
                    return (
                        <div className="row">
                            {row.map((col, j) => {
                                return (
                                    <div className="box" onClick={handleClick} row={i} col={j} >{col}</div>)
                            })}
                        </div>
                    )
                })}
            </div>
            <button onClick={choosePlayer}>X</button>
            <button onClick={choosePlayer}>O</button>
        </div>

    )
}

export default Board;

