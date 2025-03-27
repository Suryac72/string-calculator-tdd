import { add } from "../src/stringCalculator"
describe('String Calculator', () => {
    test("should return 0 for an empty string", () => {
        expect(add("")).toBe(0);
    })

    test("should return the number itself when a single number is provided as an input", () => {
        expect(add("1")).toBe(1);
        expect(add("5")).toBe(5);
    })

    test("should return sum of comma-seperated numbers", () => {
        expect(add("1,2")).toBe(3);
        expect(add("4,5")).toBe(9);
    })

    test("should return sum of multiple comma-seperated numbers", () => {
        expect(add("1,2,3,4")).toBe(10);
        expect(add("4,5,6")).toBe(15);
    })

    test("should return new lines between number", () => {
        expect(add("1\n2,3")).toBe(6);
    });

    test("should support multiple delimiters", () => {
        expect(add("//;\n1;2")).toBe(3);
        expect(add("//|\n2|3|4")).toBe(9);
    });

    test("should handle negative numbers", () => {
        expect(() => add("1,-2,3,-4")).toThrow("Negatives not allowed: -2, -4");
    })

    test("should ignore numbers greater than 1000", () => {
        expect(add("2,10001")).toBe(2);
        expect(add("2000,20")).toBe(20);
    })

    test("should multiple delimiter with  mulitple characters", () => {
        expect(add("//[***][%%%]\n1***2%%%3")).toBe(6);
    })
})