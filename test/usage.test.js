import HTTPStatus from "../dist/src/HTTPStatus.js";

describe("HTTPStatus (ESModule)", () => {
    test("OK is 200", () => {
        expect(HTTPStatus.OK).toBe(200);
    });

    test("NotFound is 404", () => {
        expect(HTTPStatus.NotFound).toBe(404);
    });
});