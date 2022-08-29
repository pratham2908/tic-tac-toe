import board from "../board/board";
import winner from "./winner";
function minimax(board,movesleft,isMax){
    let score = winner(board,computer);
    if(score==10) return score;
    if(score==-10) return score;
    if(movesleft==0) return 0;
    if(isMax){
        let best = -Infinity;
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if(board[i][j]==' '){
                    board[i][j]=computer.symbol;
                    best = Math.max(best, minimax(board,movesleft-1,!isMax));
                    board[i][j]=' ';
                }
            }
        }
        return best;
    }
    else{
        let best = Infinity;
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if(board[i][j]==' '){
                    board[i][j]=player.symbol;
                    best = Math.min(best, minimax(board,movesleft-1,!isMax));
                    board[i][j]=' ';
                }
            }
        }
        return best;
    }
}



export const makebestmove=(board,player,movesleft)=>{
    let bestmove = {
        row: 0,
        col: 0,
        score: -99999
    }
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (board[row][col] === ' ') {
                board[row][col] = player;
                let score = minimax(board, movesleft, false);
                board[row][col] = ' ';
                if (score > bestmove.score) {
                    bestmove.score = score;
                    bestmove.row = row;
                    bestmove.col = col;
                }
            }
        }
    }
    board[bestmove.row][bestmove.col] = player;
}