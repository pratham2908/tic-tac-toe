import winner from "./winner";
function minimax(board, movesleft, isMax, player, computer) {
    let score = winner(board, computer);
    if (score === 10) return score;
    if (score === -10) return score;
    if (movesleft === 0) return 0;
    if (isMax === true) {
        let best = -Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === ' ') {
                    board[i][j] = computer;
                    best = Math.max(best, minimax(board, movesleft - 1, !isMax));
                    board[i][j] = ' ';
                }
            }
        }
        return best;
    }
    else {
        let best = Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === ' ') {
                    board[i][j] = player;
                    best = Math.min(best, minimax(board, movesleft - 1, !isMax));
                    board[i][j] = ' ';
                }
            }
        }
        return best;
    }
}

export const makebestmove = (board, movesleft, player) => {
    let bestmove = {
        row: 0,
        col: 0,
        score: -99999
    }
    const computer = (player === 'O' ? 'X' : 'O');
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (board[row][col] === ' ') {
                board[row][col] = computer;
                let score = minimax(board, movesleft, true, player, computer);
                board[row][col] = ' ';
                if (score > bestmove.score) {
                    bestmove.score = score;
                    bestmove.row = row;
                    bestmove.col = col;
                }
            }
        }
    }
    board[bestmove.row][bestmove.col] = computer;
}