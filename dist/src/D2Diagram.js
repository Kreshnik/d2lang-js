"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class D2Diagram {
    constructor(shapes, connections) {
        this.shapes = shapes || [];
        this.connections = connections || [];
    }
    addShape(shape) {
        this.shapes.push(shape);
    }
    addConnection(connection) {
        this.connections.push(connection);
    }
    toString() {
        let shapes = this.shapes.map((shape) => shape.toString());
        let connections = this.connections.map((connection) => connection.toString());
        return [...shapes, ...connections].join("\n");
    }
}
exports.default = D2Diagram;
