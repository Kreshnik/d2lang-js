import Direction from "./Enum/Direction";

class D2Connection {
    firstShape: string;
    secondShape: string;
    label?: string;
    direction: Direction;

    constructor(firstShape: string, secondShape: string, label?: string, direction: Direction = Direction.TO) {
        this.firstShape = firstShape;
        this.secondShape = secondShape;
        this.label = label;
        this.direction = direction;
    }

    lines(): string[] {
        let base = `${this.firstShape} ${this.direction} ${this.secondShape}`;
        if (this.label) {
            base += `: ${this.label}`;
        }
        return [base];
    }

    toString(): string {
        return this.lines().join("\n");
    }
}
export default D2Connection;
