import HTTPStatus from "../dist/src/HTTPStatus.js";

// 除外したいプロパティ名
const exclude = ["length", "name", "prototype"];

// 逆引きマップを作成
const codeToName = Object.fromEntries(
    Object.getOwnPropertyNames(HTTPStatus)
        .filter(name =>
            !exclude.includes(name) &&
            typeof HTTPStatus[name] === "number"
        )
        .map(name => [HTTPStatus[name], name])
);

describe("HTTPStatus (ESModule)", () => {
    test.each(Object.getOwnPropertyNames(HTTPStatus)
        .filter(name =>
            !exclude.includes(name) &&
            typeof HTTPStatus[name] === "number"
        )
        .map(name => [name, HTTPStatus[name]])
    )("[ %s ] is %i", (name, code) => {
        expect(HTTPStatus[name]).toBe(code);
        expect(codeToName[code]).toBe(name);
    });
});

// getterのみを対象に全件テスト
describe("HTTPStatus.Name", () => {
    test.each(
        Object.getOwnPropertyNames(HTTPStatus)
            .filter(name =>
                !exclude.includes(name) &&
                typeof Object.getOwnPropertyDescriptor(HTTPStatus, name)?.get === "function"
            )
            .map(name => [name, HTTPStatus[name]])
    )("HTTPStatus.Name(HTTPStatus.%s) === '%s'", (name, code) => {
        expect(HTTPStatus.Name(code)).toBe(name);
    });

    test("未定義コードはundefined", () => {
        expect(HTTPStatus.Name(999)).toBeUndefined();
    });

    test("NaNはundefinedを返す", () => {
        expect(HTTPStatus.Name(NaN)).toBeUndefined();
    });
});