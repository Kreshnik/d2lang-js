import Shape from "./Enum/Shape";
import D2Connection from "./D2Connection";
import D2Style from "./D2Style";
import {addLabelAndProperties, flatten} from "./helpers";
class D2Shape {
    name: string;
    label?: string;
    shape?: Shape;
    shapes?: D2Shape[];
    connections?: D2Connection[];
    style?: D2Style;
    near?: string;

    constructor(
        name: string,
        label?: string,
        shape?: Shape,
        style?: D2Style,
        near?: string,
    ) {
        this.name = name;
        this.label = label;
        this.shape = shape;
        this.shapes = [];
        this.connections = [];
        this.style = style;
        this.near = near;
    }
    addShape(shape: D2Shape): void {
        // @ts-ignore
        this.shapes.push(shape);
    }

    addConnection(connection: D2Connection): void {
        // @ts-ignore
        this.connections.push(connection);
    }

    lines(): string[] {
        // @ts-ignore
        let shapes = flatten(this.shapes.map(shape => shape.lines()));
        // @ts-ignore
        let connections = flatten(this.connections.map(connection => connection.lines()));

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

        let lines = addLabelAndProperties(this.name, this.label, properties);

        return lines;
    }
    toString(): string {
        return this.lines().join("\n");
    }
}
export default D2Shape;
