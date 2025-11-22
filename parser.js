
function expandField(field, min, max) {
    if (field === "*") {
        return range(min, max);
    }

    if (field.startsWith("*/")) {
        const step = parseInt(field.split("/")[1], 10);
        return range(min, max).filter((v) => v % step === 0);
    }

    if (field.includes(",")) {
        return field.split(",").flatMap((f) => expandField(f, min, max));
    }

    if (field.includes("-")) {
        const [start, end] = field.split("-").map(Number);
        return range(start, end);
    }

    return [parseInt(field, 10)];
}

function range(start, end) {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

function parseCron(cronStr) {
    const parts = cronStr.trim().split(/\s+/);

    if (parts.length < 6) {
        throw new Error("Invalid cron expression");
    }

    const [minField, hourField, domField, monthField, dowField, ...cmd] = parts;

    return {
        minute: expandField(minField, 0, 59),
        hour: expandField(hourField, 0, 23),
        dayOfMonth: expandField(domField, 1, 31),
        month: expandField(monthField, 1, 12),
        dayOfWeek: expandField(dowField, 0, 6),
        command: cmd.join(" "),
    };
}
module.exports = { parseCron };