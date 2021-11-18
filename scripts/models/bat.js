export class Bat {
    constructor(rectangle, color, speed) {
        this.rectangle = rectangle;
        this.color = color;
        this.speed = speed;
    }

    move(direction, restriction) {

        const newLocationY = this.rectangle.location.y + direction.y * this.speed;

        if (!restriction || (restriction && restriction.topY <= newLocationY && restriction.bottomY >= newLocationY + this.rectangle.size.height)) {
            this.rectangle.location.y = newLocationY;
        } else if (restriction && restriction.topY > newLocationY) {
            this.rectangle.location.y = restriction.topY;
        } else if (restriction && restriction.bottomY < newLocationY + this.rectangle.size.height) {
            this.rectangle.location.y = restriction.bottomY - this.rectangle.size.height;
        }

    }

    draw(context) {
        context.fillStyle = this.color;
        context.fillRect(this.rectangle.location.x, this.rectangle.location.y, this.rectangle.size.width, this.rectangle.size.height);
    }
}