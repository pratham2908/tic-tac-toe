export const makerandommove=(board,player,movesleft)=>{
    let moves = [];
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(board[i][j]==' '){
                moves.push({row:i,col:j});
            }
        }
    }
    let randomindex = Math.floor(Math.random()*moves.length);
    let randommove = moves[randomindex];
    board[randommove.row][randommove.col] = player;
}