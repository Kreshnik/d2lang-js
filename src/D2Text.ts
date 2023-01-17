class D2Text {
    text: string;
    format: string;
    pipes: number;

    constructor(text: string, format: string, pipes: number = 1) {
        this.text = text;
        this.format = format;
        this.pipes = pipes;
    }

    lines(): string[] {
        let sep = "|".repeat(this.pipes);
        return [`${sep}${this.format}`, ...this.text.split("\n"), sep];
    }

    toString(): string {
        return this.lines().join("\n");
    }
}

export default D2Text;
