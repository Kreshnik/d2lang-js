import {stringifyBoolean, addLabelAndProperties} from "./helpers";
class D2Style {
    stroke?: string;
    strokeWidth?: number;
    fill?: string;
    shadow?: boolean;
    opacity?: number;
    strokeDash?: number;
    threeD?: boolean;

    constructor(
        stroke?: string,
        strokeWidth?: number,
        fill?: string,
        shadow?: boolean,
        opacity?: number,
        strokeDash?: number,
        three_d?: boolean
    ) {
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
        this.fill = fill;
        this.shadow = shadow;
        this.opacity = opacity;
        this.strokeDash = strokeDash;
        this.threeD = three_d;
    }
    lines(): string[] {
        let styles: string[] = [];

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
            styles.push(`shadow: ${stringifyBoolean(this.shadow)}`);
        }

        if (this.opacity !== undefined) {
            styles.push(`opacity: ${this.opacity}`);
        }

        if (this.strokeDash !== undefined) {
            styles.push(`stroke-dash: ${this.strokeDash}`);
        }

        if (this.threeD !== undefined) {
            styles.push(`3d: ${stringifyBoolean(this.threeD)}`);
        }

        if (styles.length == 0) {
            return [];
        }

        return addLabelAndProperties("style", null, styles);
    }
    toString(): string {
        return this.lines().join("\n");
    }

}

export default D2Style;
