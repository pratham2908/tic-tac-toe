const winner = (b, player, opponent) => {

  for (let row = 0; row < 3; row++) {
    if (b[row][0] == b[row][1] &&
      b[row][1] == b[row][2]) {
      if (b[row][0] == player)
        return +20;

      else if (b[row][0] == opponent)
        return -20;
    }
  }

  for (let col = 0; col < 3; col++) {
    if (b[0][col] == b[1][col] &&
      b[1][col] == b[2][col]) {
      if (b[0][col] == player)
        return +20;

      else if (b[0][col] == opponent)
        return -20;
    }
  }

  if (b[0][0] == b[1][1] && b[1][1] == b[2][2]) {
    if (b[0][0] == player)
      return +20;

    else if (b[0][0] == opponent)
      return -20;
  }

  if (b[0][2] == b[1][1] &&
    b[1][1] == b[2][0]) {
    if (b[0][2] == player)
      return +20;

    else if (b[0][2] == opponent)
      return -20;
  }
  return 0;
}

export default winner;

