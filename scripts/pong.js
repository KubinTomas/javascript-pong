import { CanvasManager } from "./canvas.js";
import { Bat } from "./models/bat.js";
import { Ball } from "./models/ball.js";
import { Point } from "./models/point.js";
import { Rectangle } from "./models/rectangle.js";
import { Size } from "./models/size.js";
import { MiddleLine } from "./models/middle-line.js";
import { Score } from "./models/score.js";
import { Borders } from "./models/borders.js";
import { Vector2D } from "./models/vector2D.js";

const workspace = document.getElementById('js-alg');

const borderHeight = 20;

const canvasManager = new CanvasManager();
let canvasSize = new Size(workspace.offsetWidth, workspace.offsetHeight);
let canvasSizeWithoutBorder = new Size(canvasSize.width, canvasSize.height - borderHeight * 2);

let canvas = canvasManager.getEmptyCanvas(new Rectangle(null, canvasSize));

workspace.appendChild(canvas);

const accesoriesColor = "#555555";
const pressedKeys = new Set();

const offsetX = 20;
let borders = new Borders(canvasSize, borderHeight, accesoriesColor);

const batSpeed = 5;
let leftBat = new Bat(new Rectangle(new Point(offsetX, borderHeight * 2), new Size(20, 150)), "#ecf0f1", batSpeed);
let rightBat = new Bat(new Rectangle(new Point(canvas.width - offsetX * 2, borderHeight * 2), new Size(20, 150)), "#FFF", batSpeed);

const ballWidth = 20;
let ball = new Ball(new Rectangle(new Point(canvas.width / 2 - ballWidth / 2, canvas.height / 2 - ballWidth / 2), new Size(ballWidth, ballWidth)), "white");

let middleLine = new MiddleLine(canvasSizeWithoutBorder, accesoriesColor, borderHeight);
let score = new Score(canvasSize, 80, accesoriesColor, borderHeight);


redraw();

function redraw() {
    const context = canvas.getContext('2d');
    context.fillStyle = "black";
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillRect(0, 0, canvas.width, canvas.height);


    borders.draw(context);
    middleLine.draw(context);
    score.draw(context);
    leftBat.draw(context);
    rightBat.draw(context);
    ball.draw(context);
}


// player movement
setInterval(() => {

    const leftPlayerDirection = new Vector2D(0, 0);
    const rightPlayerDirection = new Vector2D(0, 0);

    leftPlayerDirection.y = pressedKeys.has("w") ? -1 : pressedKeys.has("s") ? 1 : 0;
    rightPlayerDirection.y = pressedKeys.has("arrowup") ? -1 : pressedKeys.has("arrowdown") ? 1 : 0;

    const rescriction = { topY: borderHeight, bottomY: canvasSize.height - borderHeight };

    leftBat.move(leftPlayerDirection, rescriction);
    rightBat.move(rightPlayerDirection, rescriction);

    redraw();
}, 15);

document.addEventListener('keyup', (e) => {
    if (!e.repeat) {
        pressedKeys.delete(e.key.toLowerCase());
    }
});

document.addEventListener('keydown', (e) => {
    if (!e.repeat) {
        pressedKeys.add(e.key.toLowerCase());
    }
});

window.addEventListener('resize', function (event) {
    const width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    const height = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    workspace.width = width;
    workspace.height = height;

    canvasSize = new Size(workspace.offsetWidth, workspace.offsetHeight);
    canvasSizeWithoutBorder = new Size(canvasSize.width, canvasSize.height - borderHeight * 2);

    canvas = canvasManager.getEmptyCanvas(new Rectangle(null, canvasSize));

    workspace.innerHTML = '';
    workspace.appendChild(canvas);

    borders = new Borders(canvasSize, borderHeight, accesoriesColor);

    leftBat = new Bat(new Rectangle(new Point(offsetX, borderHeight * 2), new Size(20, 150)), "#ecf0f1", batSpeed);
    rightBat = new Bat(new Rectangle(new Point(canvas.width - offsetX * 2, borderHeight * 2), new Size(20, 150)), "#FFF", batSpeed);

    ball = new Ball(new Rectangle(new Point(canvas.width / 2 - ballWidth / 2, canvas.height / 2 - ballWidth / 2), new Size(ballWidth, ballWidth)), "white");

    middleLine = new MiddleLine(canvasSizeWithoutBorder, accesoriesColor, borderHeight);
    score = new Score(canvasSize, 80, accesoriesColor, borderHeight);

    redraw();


}, true);