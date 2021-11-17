import { Point } from "./point.js";

export class Score {
    constructor(canvasSize, fontSize, color) {
        this.leftScore = 0;
        this.rightScore = 0;

        this.fontSize = fontSize;
        this.canvasSize = canvasSize;
        this.color = color;
    }

    draw(context) {
        const offsetY = this.fontSize;
        const offsetX = this.fontSize;
        const leftScoreLocation = new Point(this.canvasSize.width / 2 - this.fontSize / 4 - offsetX, offsetY);
        const rightScoreLocation = new Point(this.canvasSize.width / 2 - this.fontSize / 4 + offsetX, offsetY);

        context.fillStyle = this.color;
        context.font = `${this.fontSize}px Arial`;
        context.fillText(this.leftScore, leftScoreLocation.x, leftScoreLocation.y);
        context.fillText(this.rightScore, rightScoreLocation.x, rightScoreLocation.y);
    }
}