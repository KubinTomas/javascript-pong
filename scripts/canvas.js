export class CanvasManager {
    getEmptyCanvas(rectangle) {
        const size = rectangle.size;
        const location = rectangle.location;

        const canvas = document.createElement('canvas');
        canvas.id = 'canvas';
        canvas.width = size.width;
        canvas.height = size.height;

        return canvas;
    }
}