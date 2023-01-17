import D2Connection from "./D2Connection";
import D2Shape from "./D2Shape";
class D2Diagram {
    shapes: D2Shape[];
    connections: D2Connection[];

    constructor(shapes?: D2Shape[], connections?: D2Connection[]) {
        this.shapes = shapes || [];
        this.connections = connections || [];
    }

    addShape(shape: D2Shape): void {
        this.shapes.push(shape);
    }

    addConnection(connection: D2Connection): void {
        this.connections.push(connection);
    }

    toString(): string {
        let shapes = this.shapes.map((shape) => shape.toString());
        let connections = this.connections.map((connection) => connection.toString());
        return [...shapes, ...connections].join("\n");
    }
}
export default D2Diagram;
