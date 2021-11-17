export class Borders {
    constructor(canvasSize, borderHeight, color) {
        this.canvasSize = canvasSize;
        this.borderHeight = borderHeight;
        this.color = color;
    }

    draw(context) {
        context.fillStyle = this.color;
        context.fillRect(0, 0, this.canvasSize.width, this.borderHeight);
        context.fillRect(0, this.canvasSize.height - this.borderHeight, this.canvasSize.width, this.borderHeight);
    }
}