export class Rectangle {
    constructor(location, size) {
        this.location = location;
        this.size = size;
    }

    intersect(collisionRectangle) {
        return false;
    }
}