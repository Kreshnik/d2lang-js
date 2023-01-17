"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Direction_1 = __importDefault(require("./Enum/Direction"));
class D2Connection {
    constructor(firstShape, secondShape, label, direction = Direction_1.default.TO) {
        this.firstShape = firstShape;
        this.secondShape = secondShape;
        this.label = label;
        this.direction = direction;
    }
    lines() {
        let base = `${this.firstShape} ${this.direction} ${this.secondShape}`;
        if (this.label) {
            base += `: ${this.label}`;
        }
        return [base];
    }
    toString() {
        return this.lines().join("\n");
    }
}
exports.default = D2Connection;
