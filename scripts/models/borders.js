import { Point } from "./point.js";
import { Rectangle } from "./rectangle.js";
import { Size } from "./size.js";

export class Borders {
    constructor(canvasSize, borderHeight, color) {
        this.canvasSize = canvasSize;
        this.borderHeight = borderHeight;
        this.color = color;
        this.topBorderRectangle = new Rectangle(new Point(0, 0), new Size(this.canvasSize.width, this.borderHeight));
        this.bottomBorderRectangle = new Rectangle(new Point(0, this.canvasSize.height - this.borderHeight), new Size(this.canvasSize.width, this.borderHeight));

    }

    draw(context) {
        context.fillStyle = this.color;
        context.fillRect(0, 0, this.canvasSize.width, this.borderHeight);
        context.fillRect(0, this.canvasSize.height - this.borderHeight, this.canvasSize.width, this.borderHeight);
    }
}