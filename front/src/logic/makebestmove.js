import winner from "./winner";
class Move {
    constructor() {
        let row, col;
    }
}
let player, opponent;

function isMovesLeft(board) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] != 'O' && board[i][j] != 'X') {
                return true;
            }
        }
    }
    return false;
}

function miniMax(board, depth, isMax) {
    let score = winner(board, player, opponent);
    if (score > 0) {
        return 2 * score - depth;
    }
    else if (score < 0) {
        return score + depth;
    }
    else if (!isMovesLeft(board)) {
        return 0;
    }
    if (isMax == true) {
        let best = -999999;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] != player && board[i][j] != opponent) {
                    board[i][j] = player;
                    best = Math.max(best, miniMax(board, depth + 1, !isMax));
                    board[i][j] = ' ';
                }

            }
        }
        return best;
    }
    else {
        let best = 999999;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] != player && board[i][j] != opponent) {
                    board[i][j] = opponent;
                    best = Math.min(best, miniMax(board, depth + 1, !isMax));
                    board[i][j] = ' ';
                }

            }
        }
        return best;
    }
}

export const makebestmove = (board, computer) => {
    let bestval = -99999;
    let bestmove = new Move();
    player = computer;
    opponent = computer == 'X' ? 'O' : 'X';
    bestmove.row = -1;
    bestmove.col = -1;
    console.log(board);
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] != player && board[i][j] != opponent) {
                board[i][j] = player;
                let moveval = miniMax(board, 0, false);
                console.log(moveval, ' ');
                board[i][j] = ' ';
                if (moveval > bestval) {
                    bestval = moveval;
                    bestmove.row = i;
                    bestmove.col = j;
                }
            }
        }
    }
    board[bestmove.row][bestmove.col] = computer;

}