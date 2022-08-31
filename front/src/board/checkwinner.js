export const checkWinner = (b, player) => {
    const opponent = player === 'X' ? 'O' : 'X';
    for (let row = 0; row < 3; row++) {
        if (b[row][0] == b[row][1] &&
            b[row][1] == b[row][2]) {
            if (b[row][0] == player)
                return player;

            else if (b[row][0] == opponent)
                return opponent;
        }
    }

    for (let col = 0; col < 3; col++) {
        if (b[0][col] == b[1][col] &&
            b[1][col] == b[2][col]) {
            if (b[0][col] == player)
                return player;

            else if (b[0][col] == opponent)
                return opponent;
        }
    }

    if (b[0][0] == b[1][1] && b[1][1] == b[2][2]) {
        if (b[0][0] == player)
            return player;

        else if (b[0][0] == opponent)
            return opponent;
    }

    if (b[0][2] == b[1][1] &&
        b[1][1] == b[2][0]) {
        if (b[0][2] == player)
            return player;

        else if (b[0][2] == opponent)
            return opponent;
    }
    return false;
}