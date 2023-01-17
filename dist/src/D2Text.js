"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class D2Text {
    constructor(text, format, pipes = 1) {
        this.text = text;
        this.format = format;
        this.pipes = pipes;
    }
    lines() {
        let sep = "|".repeat(this.pipes);
        return [`${sep}${this.format}`, ...this.text.split("\n"), sep];
    }
    toString() {
        return this.lines().join("\n");
    }
}
exports.default = D2Text;
