"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringifyBoolean = exports.flatten = exports.addLabelAndProperties = exports.indent = void 0;
function indent(items, times = 2) {
    return items.map((item) => `${" ".repeat(times)}${item}`);
}
exports.indent = indent;
function addLabelAndProperties(name, label, properties) {
    let hasProperties = properties !== undefined && properties.length > 0;
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
exports.addLabelAndProperties = addLabelAndProperties;
function flatten(items) {
    // @ts-ignore
    return [].concat(...items);
}
exports.flatten = flatten;
function stringifyBoolean(value) {
    return value ? "true" : "false";
}
exports.stringifyBoolean = stringifyBoolean;
