import chai from 'chai';
import spies from 'chai-spies';
import { myMap } from '../problems/my-map.js';

const { expect } = chai;

chai.use(spies);

describe('myMap Function', () => {

    let arr;
    let squareRoot;
    let divideByTWo;
    let multiplyByTwo;
    
    beforeEach(() => {
        arr = new Array(1, 3, 4, 6, 4);

        multiplyByTwo = (element) => element * 2;
        
        squareRoot = (element) => Math.sqrt(element);

        divideByTWo = (element) => element / 2;
    });

    after(() => {
        arr = null;
    });

    it ("should throw an error for bad or invalid input", () => {

        const invalidInput1 = null;
        const invalidInput2 = "I am a string";
        const invalidInput3 = {i: "an", object: "type"};

        expect(() => myMap(invalidInput1, squareRoot)).to.throw(TypeError, "bad input. function expects an array");
        expect(() => myMap(invalidInput2, divideByTWo)).to.throw(TypeError, "bad input. function expects an array");
        expect(() => myMap(invalidInput3, multiplyByTwo)).to.throw(TypeError, "bad input. function expects an array");
    });

    it("should not return a new array without mutating the original array", () => {

        expect(myMap(arr, multiplyByTwo)).to.not.equal(arr);
        expect(myMap(arr, squareRoot)).to.not.equal(arr);
        expect(myMap(arr, divideByTWo)).to.not.equal(arr);
    });

    it('should not have called Array.map function', () => {
        
        const spy = chai.spy.on(arr, 'map');

        myMap(arr, squareRoot);
        myMap(arr, multiplyByTwo);
        myMap(arr, divideByTWo);

        expect(spy).to.not.have.been.called();

        chai.spy.restore(arr)
    });

    it("should have the passed in callback invoked on all elements of the passed i  array", () => {
        
        const spy = chai.spy();

        myMap(arr, spy);

        expect(spy).to.have.been.called.exactly(arr.length);

        arr.forEach((ele) => {
            expect(spy).to.have.been.called.with(ele);
        });
    });
});