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
        this.texts = [];
        this.icon = "";
    }
    addShape(shape) {
        // @ts-ignore
        this.shapes.push(shape);
    }
    addConnection(connection) {
        // @ts-ignore
        this.connections.push(connection);
    }
    setIcon(icon) {
        this.icon = icon;
    }
    addText(text) {
        // @ts-ignore
        this.texts.push(text);
    }
    lines() {
        // @ts-ignore
        let shapes = (0, helpers_1.flatten)(this.shapes.map(shape => shape.lines()));
        // @ts-ignore
        let connections = (0, helpers_1.flatten)(this.connections.map(connection => connection.lines()));
        // @ts-ignore
        let texts = (0, helpers_1.flatten)(this.texts.map(text => text.lines()));
        let properties = shapes.concat(connections);
        properties = texts.concat(properties);
        if (this.icon !== "") {
            properties.push(`icon: ${this.icon}`);
        }
        if (this.shape) {
            properties.push(`shape: ${this.shape}`);
        }
        if (this.near) {
            properties.push(`near: ${this.near}`);
        }
        if (this.style) {
            properties.push(...this.style.lines());
        }
        return (0, helpers_1.addLabelAndProperties)(this.name, this.label, properties);
    }
    toString() {
        return this.lines().join("\n");
    }
}
exports.default = D2Shape;
