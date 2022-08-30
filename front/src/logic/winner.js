const winner = (board, computer) => {
  let score = 0;
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      if (board[i][0] === computer) {
        score = 10;
        break;
      }
      else {
        score = -10;
        break;
      }
    }
    else if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      if (board[0][i] === computer) {
        score = 10;
        break;
      }
      else {
        score = -10;
        break;
      }
    }
  }
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    if (board[0][0] === computer) {
      score = 10;
    }
    else {
      score = -10;
    }
  }
  else if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    if (board[0][2] === computer) {
      score = 10;
    }
    else {
      score = -10;
    }
  }
  return score;
}

export default winner;

