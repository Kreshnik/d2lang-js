export function indent(items: string[], times: number = 2): string[] {
    return items.map((item) => `${" ".repeat(times)}${item}`);
}

export function addLabelAndProperties(name: string, label?: string|null, properties?: string[]): string[] {
    let hasProperties: boolean = properties !== undefined && properties.length > 0;

    let firstLine = name;
    if (label || hasProperties) {
        firstLine += ":";
    }

    if (label) {
        firstLine += ` ${label}`;
    }

    if (hasProperties) {
        firstLine += " {";
    }

    if (properties && hasProperties) {
        return [firstLine, ...indent(properties), "}"];
    }

    return [firstLine];
}

export function flatten(items: string[][]): string[] {
    // @ts-ignore
    return [].concat(...items);
}

export function stringifyBoolean(value: boolean): string {
    return value ? "true" : "false";
}
