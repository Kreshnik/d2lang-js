"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
class D2Style {
    constructor(stroke, strokeWidth, fill, shadow, opacity, strokeDash, three_d) {
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
        this.fill = fill;
        this.shadow = shadow;
        this.opacity = opacity;
        this.strokeDash = strokeDash;
        this.threeD = three_d;
    }
    lines() {
        let styles = [];
        if (this.stroke) {
            styles.push(`stroke: ${this.stroke}`);
        }
        if (this.strokeWidth) {
            styles.push(`stroke-width: ${this.strokeWidth}`);
        }
        if (this.fill) {
            styles.push(`fill: ${this.fill}`);
        }
        if (this.shadow !== undefined) {
            styles.push(`shadow: ${(0, helpers_1.stringifyBoolean)(this.shadow)}`);
        }
        if (this.opacity !== undefined) {
            styles.push(`opacity: ${this.opacity}`);
        }
        if (this.strokeDash !== undefined) {
            styles.push(`stroke-dash: ${this.strokeDash}`);
        }
        if (this.threeD !== undefined) {
            styles.push(`3d: ${(0, helpers_1.stringifyBoolean)(this.threeD)}`);
        }
        if (styles.length == 0) {
            return [];
        }
        return (0, helpers_1.addLabelAndProperties)("style", null, styles);
    }
    toString() {
        return this.lines().join("\n");
    }
}
exports.default = D2Style;
