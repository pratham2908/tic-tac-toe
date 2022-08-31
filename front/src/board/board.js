import React, { useState, useEffect } from "react";
import { makebestmove } from "../logic/makebestmove";

const Board = () => {
    const [board, setBoard] = useState([['', '', ''], ['', '', ''], ['', '', '']]);
    const [player, setPlayer] = useState('');
    const [computer, setComputer] = useState('');
    const [gameOver, setGameOver] = useState(false);
    let movesLeft = 9;
    function choosePlayer(e) {
        setPlayer(e.target.innerText);
        setComputer(e.target.innerText == 'X' ? 'O' : 'X');
    }

    function computerMoves() {
        console.log(computer);
        makebestmove(board, computer);
        setBoard([...board]);
        movesLeft--;
        //check for winner
        if (movesLeft == 0) {
            setGameOver(true);
        }
    }

    function handleClick(e) {
        const row = e.target.getAttribute('row');
        const col = e.target.getAttribute('col');
        if (board[row][col] !== 'X' && board[row][col] !== 'O') {
            board[row][col] = player;
            setBoard([...board]);
            //check for winner
            movesLeft--;
            if (movesLeft == 0) {
                setGameOver(true);
                return;
            }
            setTimeout(computerMoves, 500);
        } else {
            alert(' Choose an Empty cell');
        }
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

