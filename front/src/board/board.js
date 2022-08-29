import React, { useState } from "react";
import { makebestmove } from "../logic/makebestmove";

const Board = () => {
    const [board, setBoard] = useState([[' ',' ',' '], [' ',' ',' '], [' ',' ',' ']]);
    const player = 'abhishek';
    
    makebestmove(board, player);
    
    
    return (
        <div className="board">
            <div className="container">
                <div class="child">1</div>
                <div class="child">2</div>
                <div class="child">3</div>
                <div class="child">4</div>
                <div class="child">5</div>
                <div class="child">6</div>
                <div class="child">7</div>
                <div class="child">8</div>
                <div class="child">9</div>
            </div>
        </div>
    )
}

export default Board;



// finish
