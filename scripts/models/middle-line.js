import { Point } from "./point.js";
import { Rectangle } from "./rectangle.js";
import { Size } from "./size.js";

export class MiddleLine {
    constructor(canvasSize, color, borderHeight) {
        this.canvasSize = canvasSize;
        this.color = color;
        this.borderHeight = borderHeight;

        this.calculateSizeAndOffset();
    }

    calculateSizeAndOffset() {
        const offsetY = 10;
        const lineHeight = 30;
        const lineActualHeight = lineHeight - offsetY;

        const lineCount = Math.floor(this.canvasSize.height / (lineHeight));
        const lineCountSpaceLeft = this.canvasSize.height - (lineCount * lineHeight);
        const additionalYOffset = lineCountSpaceLeft / lineCount;

        this.rectangle = new Rectangle(null, new Size(5, lineActualHeight));
        this.offsetY = offsetY + additionalYOffset;
    }

    draw(context) {
        context.fillStyle = this.color;
        const location = new Point(this.canvasSize.width / 2 - this.rectangle.size.width / 2, this.offsetY / 2 + this.borderHeight);

        while (location.y < this.canvasSize.height) {
            context.fillRect(location.x, location.y, this.rectangle.size.width, this.rectangle.size.height);
            console.log(location.x, location.y, this.rectangle.size.width, this.rectangle.size.height);
            location.y += this.rectangle.size.height + this.offsetY;

            console.log(this.offsetY);
        }


    }
}