"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class D2Text {
    constructor(property, text, format, pipes = 1) {
        this.property = property;
        this.text = text;
        this.format = format;
        this.pipes = pipes;
    }
    lines() {
        let sep = "|".repeat(this.pipes);
        return [`${this.property}:${sep}${this.format}`, ...this.text.split("\n"), sep];
    }
    toString() {
        return this.lines().join("\n");
    }
}
exports.default = D2Text;
