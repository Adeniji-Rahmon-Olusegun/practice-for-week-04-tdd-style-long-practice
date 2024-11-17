import chai from 'chai';
const { expect } = chai;
import { returnsThree, reciprocal } from '../problems/number-fun.js';

describe ('returnsThree function', () => {
    
    it ('should simply return 3', () => {
        let num1 = returnsThree();

        expect(num1).to.equal(3);
    });
});

describe ('reciprocal funtion', () => {
    
    context('If valid inputs are provided as an argument. Numbers between 1 and 1000000', () => {

        it ('should return the reciprocal of the given number', () => {
            let num1 = 5;
            let res1 = reciprocal(num1);

            let num2 = 1000;
            let res2 = reciprocal(num2);

            let num3 = 1000000;
            let res3 = reciprocal(num3);

            expect(res1).to.equal(0.2);
            expect(res2).to.equal(0.001);
            expect(res3).to.equal(0.000001);
        });
    });

    context('If invalid input is provided as an argument. Numbers less that 1 and greater than 1000000', () => {

        it ('should throw an error', () => {
            let num1 = -25;
            let num2 = 200000000000;
            let num3 = -0.0000001;

            expect(() => reciprocal(num1)).to.throw(TypeError, 'Only accepts number between 1 and 1000000');
            expect(() => reciprocal(num2)).to.throw(TypeError, 'Only accepts number between 1 and 1000000');
            expect(() => reciprocal(num3)).to.throw(TypeError, 'Only accepts number between 1 and 1000000');
        });
    });

    context('If bad input is provided as an argument', () => {

        it ('should throw an error', () => {
            let val1 = [4];
            let val2 = "-1000000";
            let val3 = {a: 1, b: 'Happy'};

            expect(() => reciprocal(val1)).to.throw(TypeError, "Function expect a number between 1 and 1000000");
            expect(() => reciprocal(val2)).to.throw(TypeError, "Function expect a number between 1 and 1000000");
            expect(() => reciprocal(val3)).to.throw(TypeError, "Function expect a number between 1 and 1000000");
        });
    })
})

