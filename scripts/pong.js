import { CanvasManager } from "./canvas.js";
import { Bat } from "./models/bat.js";
import { Ball } from "./models/ball.js";
import { Point } from "./models/point.js";
import { Rectangle } from "./models/rectangle.js";
import { Size } from "./models/size.js";
import { MiddleLine } from "./models/middle-line.js";
import { Score } from "./models/score.js";
import { Borders } from "./models/borders.js";

const workspace = document.getElementById('js-alg');

const borderHeight = 20;

const canvasManager = new CanvasManager();
const canvasSize = new Size(workspace.offsetWidth, workspace.offsetHeight);
const canvasSizeWithoutBorder = new Size(canvasSize.width, canvasSize.height - borderHeight * 2);

const canvas = canvasManager.getEmptyCanvas(new Rectangle(null, canvasSize));

workspace.appendChild(canvas);

const accesoriesColor = "#555555";

const offsetX = 20;
const borders = new Borders(canvasSize, borderHeight, accesoriesColor);

const bat1 = new Bat(new Rectangle(new Point(offsetX, borderHeight * 2), new Size(20, 150)), "#ecf0f1");
const bat2 = new Bat(new Rectangle(new Point(canvas.width - offsetX * 2, borderHeight * 2), new Size(20, 150)), "#FFF");

const ballWidth = 20;
const ball = new Ball(new Rectangle(new Point(canvas.width / 2 - ballWidth / 2, canvas.height / 2 - ballWidth / 2), new Size(ballWidth, ballWidth)), "white");

const middleLine = new MiddleLine(canvasSizeWithoutBorder, accesoriesColor, borderHeight);
const score = new Score(canvasSize, 80, accesoriesColor, borderHeight);


redraw();

function redraw() {
    const context = canvas.getContext('2d');
    context.fillStyle = "black";
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillRect(0, 0, canvas.width, canvas.height);


    borders.draw(context);
    middleLine.draw(context);
    score.draw(context);
    bat1.draw(context);
    bat2.draw(context);
    ball.draw(context);
}

document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    if (key === "w") {
        bat1.rectangle.location.y -= 5;
        console.log(bat1.rectangle.location.y)
    }
    else if (key === "s") {
        bat1.rectangle.location.y += 5;
    }

    redraw();

});

// window.addEventListener('resize', function (event) {
//     const width = window.innerWidth
//         || document.documentElement.clientWidth
//         || document.body.clientWidth;

//     const height = window.innerHeight
//         || document.documentElement.clientHeight
//         || document.body.clientHeight;

//     workspace.width = width;
//     workspace.height = height;

//     redraw();


// }, true);