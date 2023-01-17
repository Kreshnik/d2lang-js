"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
class D2Shape {
    constructor(name, label, shape, style, near) {
        this.name = name;
        this.label = label;
        this.shape = shape;
        this.shapes = [];
        this.connections = [];
        this.style = style;
        this.near = near;
    }
    addShape(shape) {
        // @ts-ignore
        this.shapes.push(shape);
    }
    addConnection(connection) {
        // @ts-ignore
        this.connections.push(connection);
    }
    lines() {
        // @ts-ignore
        let shapes = (0, helpers_1.flatten)(this.shapes.map(shape => shape.lines()));
        // @ts-ignore
        let connections = (0, helpers_1.flatten)(this.connections.map(connection => connection.lines()));
        let properties = shapes.concat(connections);
        if (this.shape) {
            properties.push(`shape: ${this.shape}`);
        }
        if (this.near) {
            properties.push(`near: ${this.near}`);
        }
        if (this.style) {
            properties.push(...this.style.lines());
        }
        let lines = (0, helpers_1.addLabelAndProperties)(this.name, this.label, properties);
        return lines;
    }
    toString() {
        return this.lines().join("\n");
    }
}
exports.default = D2Shape;
