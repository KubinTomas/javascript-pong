export class Ball {
    constructor(rectangle, color, direction, speed) {
        this.rectangle = rectangle;
        this.color = color;
        this.direction = direction;
        this.speed = speed;
    }

    move() {
        this.rectangle.location.x += this.direction.x * this.speed;
        this.rectangle.location.y += this.direction.y * this.speed;
    }

    draw(context) {
        context.fillStyle = this.color;
        context.fillRect(this.rectangle.location.x, this.rectangle.location.y, this.rectangle.size.width, this.rectangle.size.height);
    }

    checkCollisionWith(collisionRectangle) {
        return this.rectangle.intersect(collisionRectangle);
    }
}