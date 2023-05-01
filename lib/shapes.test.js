const { Triangle, Square, Circle } = require("./shapes.js");

describe("Triangle test", () => {
    test("test for a triangle with a purple background", () => {
        expect(new Triangle('purple').render()).toEqual(
            '<polygon points="150, 18 244, 182 56, 182" fill="purple" />'
        );
    });
});

describe("Triangle test", () => {
    test("test for a square with a blue background", () => {
        expect(new Square('blue').render()).toEqual(
            '<rect x="73" y="40" width="160" height="160" fill="blue" />'
        );
    });
});

describe("Triangle test", () => {
    test("test for a circle with a #000000 background", () => {
        expect(new Circle('#000000').render()).toEqual(
            '<circle cx="150" cy="115" r="80" fill="#000000" />'
        );
    });
});