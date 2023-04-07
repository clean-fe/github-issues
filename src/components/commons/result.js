export class Result {
    static ok(value) {
        return { ok: true, value };
    }

    static error(message) {
        return { ok: false, error: new Error(message) };
    }
}