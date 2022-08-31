const loop = document.querySelector(".modal canvas");
const ctx2 = loop.getContext("2d");

loop.style.marginTop = "50px";
ctx2.canvas.width = 480;
ctx2.canvas.height = 480;

ctx2.strokeStyle = "#998019";
ctx2.shadowOffsetX = 2;
ctx2.shadowOffsetY = 2;
ctx2.shadowColor = "black";
ctx2.shadowBlur = 20;
let count2 = 0;

function firstGame2() {
    drawGrid2();
    ctx2.lineWidth = 10;

    setTimeout(() => {
        drawCross2(180, 180);
    }, 500);

    setTimeout(() => {
        drawCircle2(80, 80);
    }, 1000);

    setTimeout(() => {
        drawCross2(180, 20);
    }, 1500);

    setTimeout(() => {
        drawCircle2(240, 400);
    }, 2000);

    setTimeout(() => {
        drawCross2(340, 180);
    }, 2500);

    setTimeout(() => {
        drawCircle2(80, 240);
    }, 3000);

    setTimeout(() => {
        drawCross2(340, 340);
    }, 3500);

    setTimeout(() => {
        drawCircle2(80, 400);
    }, 4000);

    setTimeout(() => {
        drawWinLine2(80, 10, 80, 470);
    }, 4500);

    setTimeout(() => {
        loop.style.transition = "opacity 0.5s ease-in-out";
        loop.style.opacity = "0";
    }, 5000);

    setTimeout(() => {
        loop.style.opacity = "1";
        count2++;
        secondGame2();
    }, 5500);
}

function secondGame2() {
    drawGrid2();
    ctx2.lineWidth = 10;


    setTimeout(() => {
        drawCircle2(240, 240);
    }, 500);

    setTimeout(() => {
        drawCross2(340, 180);
    }, 1000);

    setTimeout(() => {
        drawCircle2(80, 80);
    }, 1500);

    setTimeout(() => {
        drawCross2(340, 340);
    }, 2000);

    setTimeout(() => {
        drawCircle2(400, 80);
    }, 2500);

    setTimeout(() => {
        drawCross2(20, 340);

    }, 3000);

    setTimeout(() => {
        drawCircle2(240, 80);
    }, 3500);

    setTimeout(() => {
        drawWinLine2(10, 80, 470, 80);
    }, 4000);

    setTimeout(() => {
        loop.style.transition = "opacity 0.5s ease-in-out";
        loop.style.opacity = "0";
    }, 4500);

    setTimeout(() => {
        loop.style.opacity = "1";
        count2++;

        thirdGame2();
    }, 5000);


}

function thirdGame2() {
    drawGrid2();
    ctx2.lineWidth = 10;


    setTimeout(() => {
        drawCross2(20, 340);
    }, 500);

    setTimeout(() => {
        drawCircle2(240, 240);
    }, 1000);

    setTimeout(() => {
        drawCross2(340, 20);
    }, 1500);

    setTimeout(() => {
        drawCircle2(400, 400);
    }, 2000);

    setTimeout(() => {
        drawCross2(20, 20);
    }, 2500);

    setTimeout(() => {
        drawCircle2(80, 240);
    }, 3000);

    setTimeout(() => {
        drawCross2(180, 20);
    }, 3500);

    setTimeout(() => {
        drawWinLine2(10, 80, 470, 80);
    }, 4000);

    setTimeout(() => {
        loop.style.transition = "opacity 0.5s ease-in-out";
        loop.style.opacity = "0";
    }, 5000);

    setTimeout(() => {
        loop.style.opacity = "1";
        count2++;

        firstGame2();
    }, 5500);

}

function drawCross2(x, y) {
    if (count2 % 2 === 0) {
        ctx2.strokeStyle = "#85502a";
    } else {
        ctx2.strokeStyle = "#e5eb34";
    }
    ctx2.beginPath();
    ctx2.moveTo(x, y);
    ctx2.lineTo(x + 120, y + 120);
    ctx2.moveTo(x + 120, y);
    ctx2.lineTo(x, y + 120);
    ctx2.stroke();
    ctx2.closePath();
}

function drawCircle2(x, y) {
    if (count2 % 2 === 0) {
        ctx2.strokeStyle = "#e5eb34";
    } else {
        ctx2.strokeStyle = "#85502a";
    }
    ctx2.beginPath();
    ctx2.arc(x, y, 60, 0, Math.PI * 2, true);
    ctx2.stroke();
    ctx2.closePath();
}

function drawGrid2() {
    ctx2.clearRect(0, 0, loop.width, loop.height);
    ctx2.beginPath();
    ctx2.lineWidth = 3;
    ctx2.strokeStyle = "#991111";

    ctx2.strokeRect(0, 0, ctx2.canvas.width, ctx2.canvas.height);
    ctx2.moveTo(ctx2.canvas.width / 3, 0);
    ctx2.lineTo(ctx2.canvas.width / 3, ctx2.canvas.height);
    ctx2.moveTo(ctx2.canvas.width * 2 / 3, 0);
    ctx2.lineTo(ctx2.canvas.width * 2 / 3, ctx2.canvas.height);
    ctx2.moveTo(0, ctx2.canvas.height / 3);
    ctx2.lineTo(ctx2.canvas.width, ctx2.canvas.height / 3);
    ctx2.moveTo(0, ctx2.canvas.height * 2 / 3);
    ctx2.lineTo(ctx2.canvas.width, ctx2.canvas.height * 2 / 3);
    ctx2.stroke();
}

function drawWinLine2(x1, y1, x2, y2,) {
    ctx2.lineWidth = 15;


    ctx2.beginPath();
    ctx2.moveTo(x1, y1);
    ctx2.lineTo(x2, y2);
    ctx2.stroke();
    ctx2.closePath();
}

firstGame2();

