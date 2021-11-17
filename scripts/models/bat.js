export class Bat {
    constructor(rectangle, color) {
        this.rectangle = rectangle;
        this.color = color;
    }

    draw(context) {
        context.fillStyle = this.color;
        context.fillRect(this.rectangle.location.x, this.rectangle.location.y, this.rectangle.size.width, this.rectangle.size.height);
    }
}