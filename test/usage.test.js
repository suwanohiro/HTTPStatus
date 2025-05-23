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