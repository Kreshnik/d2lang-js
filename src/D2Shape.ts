import Shape from "./Enum/Shape";
import D2Connection from "./D2Connection";
import D2Style from "./D2Style";
import {addLabelAndProperties, flatten} from "./helpers";
import D2Text from "./D2Text";

class D2Shape {
    name: string;
    label?: string;
    shape?: Shape;
    icon?: string;
    shapes?: D2Shape[];
    connections?: D2Connection[];
    style?: D2Style;
    near?: string;
    texts?: D2Text[];

    constructor(
        name: string,
        label?: string,
        shape?: Shape,
        style?: D2Style,
        near?: string
    ) {
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
    addShape(shape: D2Shape): void {
        // @ts-ignore
        this.shapes.push(shape);
    }

    addConnection(connection: D2Connection): void {
        // @ts-ignore
        this.connections.push(connection);
    }

    setIcon(icon: string): void {
        this.icon = icon;
    }

    addText(text: D2Text): void {
        // @ts-ignore
        this.texts.push(text);
    }

    lines(): string[] {
        // @ts-ignore
        let shapes = flatten(this.shapes.map(shape => shape.lines()));
        // @ts-ignore
        let connections = flatten(this.connections.map(connection => connection.lines()));

        // @ts-ignore
        let texts = flatten(this.texts.map(text => text.lines()));

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

        return addLabelAndProperties(this.name, this.label, properties);
    }
    toString(): string {
        return this.lines().join("\n");
    }
}
export default D2Shape;
