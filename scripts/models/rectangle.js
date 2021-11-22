export class Rectangle {
    constructor(location, size) {
        this.location = location;
        this.size = size;
    }

    intersect(collisionRectangle) {
        if (collisionRectangle.location.x < this.location.x + this.size.width && this.location.x < collisionRectangle.location.x + collisionRectangle.size.width && collisionRectangle.location.y < this.location.y + this.size.height)
            return this.location.y < collisionRectangle.location.y + collisionRectangle.size.height;

        return false;
    }
}