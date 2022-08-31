const canvas = document.querySelector(".loop-game");
const ctx = canvas.getContext("2d");

canvas.style.marginTop = "50px";
ctx.canvas.width = 666;
ctx.canvas.height = 566;

ctx.strokeStyle = "#991111";
ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;
ctx.shadowColor = "black";
ctx.shadowBlur = 20;
let count = 0;

function firstGame() {
    drawGrid();
    ctx.lineWidth = 15;


    setTimeout(() => {
        drawCross(250, 210);
    }, 500);

    setTimeout(() => {
        drawCircle(111, 95);
    }, 1000);

    setTimeout(() => {
        drawCross(250, 20);
    }, 1500);

    setTimeout(() => {
        drawCircle(333, 470);
    }, 2000);

    setTimeout(() => {
        drawCross(470, 210);
    }, 2500);

    setTimeout(() => {
        drawCircle(111, 285);
    }, 3000);

    setTimeout(() => {
        drawCross(470, 400);
    }, 3500);

    setTimeout(() => {
        drawCircle(111, 470);
    }, 4000);

    setTimeout(() => {
        drawWinLine(111, 10, 111, 550);
    }, 4500);

    setTimeout(() => {
        canvas.style.transition = "opacity 0.5s ease-in-out";
        canvas.style.opacity = "0";
    }, 5000);

    setTimeout(() => {
        canvas.style.opacity = "1";
        count++;
        secondGame();
    }, 5500);
}

function secondGame() {
    drawGrid();
    ctx.lineWidth = 15;


    setTimeout(() => {
        drawCircle(333, 285);
    }, 500);

    setTimeout(() => {
        drawCross(470, 220);
    }, 1000);

    setTimeout(() => {
        drawCircle(111, 90);
    }, 1500);

    setTimeout(() => {
        drawCross(470, 410);
    }, 2000);

    setTimeout(() => {
        drawCircle(555, 90);
    }, 2500);

    setTimeout(() => {
        drawCross(25, 400);

    }, 3000);

    setTimeout(() => {
        drawCircle(333, 90);
    }, 3500);

    setTimeout(() => {
        drawWinLine(20, 90, 640, 90);
    }, 4000);

    setTimeout(() => {
        canvas.style.transition = "opacity 0.5s ease-in-out";
        canvas.style.opacity = "0";
    }, 4500);

    setTimeout(() => {
        canvas.style.opacity = "1";
        count++;

        thirdGame();
    }, 5000);


}

function thirdGame() {
    drawGrid();
    ctx.lineWidth = 15;


    setTimeout(() => {
        drawCross(20, 410);
    }, 500);

    setTimeout(() => {
        drawCircle(333, 285);
    }, 1000);

    setTimeout(() => {
        drawCross(470, 20);
    }, 1500);

    setTimeout(() => {
        drawCircle(555, 470);
    }, 2000);

    setTimeout(() => {
        drawCross(20, 20);
    }, 2500);

    setTimeout(() => {
        drawCircle(111, 285);
    }, 3000);

    setTimeout(() => {
        drawCross(250, 20);
    }, 3500);

    setTimeout(() => {
        drawWinLine(20, 90, 640, 90);
    }, 4000);

    setTimeout(() => {
        canvas.style.transition = "opacity 0.5s ease-in-out";
        canvas.style.opacity = "0";
    }, 5000);

    setTimeout(() => {
        canvas.style.opacity = "1";
        count++;

        firstGame();
    }, 5500);

}

function drawCross(x, y) {
    if (count % 2 === 0) {
        ctx.strokeStyle = "#85502a";
    } else {
        ctx.strokeStyle = "#e5eb34";
    }
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 150, y + 140);
    ctx.moveTo(x + 150, y);
    ctx.lineTo(x, y + 140);
    ctx.stroke();
    ctx.closePath();
}

function drawCircle(x, y) {
    if (count % 2 === 0) {
        ctx.strokeStyle = "#e5eb34";
    } else {
        ctx.strokeStyle = "#85502a";
    }
    ctx.beginPath();
    ctx.arc(x, y, 70, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.closePath();
}

function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#991111";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.strokeRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.moveTo(ctx.canvas.width / 3, 0);
    ctx.lineTo(ctx.canvas.width / 3, ctx.canvas.height);
    ctx.moveTo(ctx.canvas.width * 2 / 3, 0);
    ctx.lineTo(ctx.canvas.width * 2 / 3, ctx.canvas.height);
    ctx.moveTo(0, ctx.canvas.height / 3);
    ctx.lineTo(ctx.canvas.width, ctx.canvas.height / 3);
    ctx.moveTo(0, ctx.canvas.height * 2 / 3);
    ctx.lineTo(ctx.canvas.width, ctx.canvas.height * 2 / 3);
    ctx.stroke();
}

function drawWinLine(x1, y1, x2, y2) {

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}

firstGame();


