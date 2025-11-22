#!/usr/bin/env node
const { parseCron } = require("./parser");
const input = process.argv[2];
//console.log(input)
if (!input) {
    console.error("Please give argument");
    process.exit(1);
}

const result = parseCron(input);
//console.log(result)
const formatLine = (label, values) => {
    const padded = label.padEnd(14, " ");
    const joined = Array.isArray(values) ? values.join(" ") : values;
    return `${padded}${joined}`;
};

console.log(formatLine("minute", result.minute));
console.log(formatLine("hour", result.hour));
console.log(formatLine("day of month", result.dayOfMonth));
console.log(formatLine("month", result.month));
console.log(formatLine("day of week", result.dayOfWeek));
console.log(formatLine("command", result.command));

