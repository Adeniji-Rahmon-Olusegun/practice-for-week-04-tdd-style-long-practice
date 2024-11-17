import chai from 'chai';
const { expect } = chai;
import { reverseString } from '../problems/reverse-string.js';

describe("reverseString", () => {

    it ('should throw an error if input not a string', () => {
        let str = ["Happy"];
        let str1 = {name: "Teju", age: 10};
        let str3 = null;

        expect(() => reverseString(str)).to.throw(TypeError, 'function expects a string');
        expect(() => reverseString(str1)).to.throw(TypeError, 'function expects a string');
        expect(() => reverseString(str3)).to.throw(TypeError, 'function expects a string');
    });

    it ('should reverse a given string input', () => {
        let str1 = "fun";
        let res1 = reverseString(str1);

        let str2 = "";
        let res2 = reverseString(str2);

        expect(res1).to.equal("nuf");
        expect(res2).to.equal("");
    });
});
 