class D2Text {
    property: string;
    text: string;
    format: string;
    pipes: number;

    constructor(property: string, text: string, format: string, pipes: number = 1) {
        this.property = property;
        this.text = text;
        this.format = format;
        this.pipes = pipes;
    }

    lines(): string[] {
        let sep = "|".repeat(this.pipes);
        return [`${this.property}:${sep}${this.format}`, ...this.text.split("\n"), sep];
    }

    toString(): string {
        return this.lines().join("\n");
    }
}

export default D2Text;
