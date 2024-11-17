import chai from 'chai';
const { expect } = chai;
import { Triangle, Scalene, Isosceles } from '../problems/triangle.js';

describe('Triangle Class', () => {

    let triangle;

    beforeEach(() => {
        triangle = new Triangle(3, 4, 2);
    });

    context("constructor function", () => {

        it("should create instance of Traingle class", () => {
            expect(triangle).to.exist;
        });

        it("should have side1, side2, side3 properties", () => {
            expect(triangle).to.have.all.keys('side1', 'side2', 'side3');
        });

        it("should have all properties set", () => {
            expect(triangle).to.deep.include({side1: 3, side2: 4, side3: 2});
        });
    });

    context("getPerimeter() Instance Method", () => {

        it("should return the perimiter of a given Triangle instance", () => {
            const triangle1 = new Triangle(4, 10, 10);
            const triangle2 = new Triangle(7, 8, 4);

            expect(triangle.getPerimeter()).to.equal(9);
            expect(triangle1.getPerimeter()).to.equal(24);
            expect(triangle2.getPerimeter()).to.equal(19);
        });
    });

    context("hasValidSideLengths() Instance Method", () => {

        context("If triangle instance has valid sides", () => {

            it("should return true", () => {
                const triangle1 = new Triangle(4, 10, 10);
                const triangle2 = new Triangle(7, 8, 4);

                expect(triangle.hasValidSideLengths()).to.be.true;
                expect(triangle1.hasValidSideLengths()).to.be.true;
                expect(triangle2.hasValidSideLengths()).to.be.true;
            });
        });

        context("If triangle instance has invalid sides", () => {
            
            it("should return false", () => {
                const triangle1 = new Triangle(4, 1, 10);
                const triangle2 = new Triangle(7, 17, 4);
                const triangle3 = new Triangle(25, 1, 2);

                expect(triangle1.hasValidSideLengths()).to.be.false;
                expect(triangle2.hasValidSideLengths()).to.be.false;
                expect(triangle3.hasValidSideLengths()).to.be.false;
            });
        });
    });

    context("validate() Instance Method", () => {
        
        context("If triangle side lengths are valid", () => {

            it("should add a isValid property to the triangle instance with a value of true", () => {
                
                const triangle1 = new Triangle(4, 10, 10);
                const triangle2 = new Triangle(7, 8, 4);

                triangle.validate();
                triangle1.validate();
                triangle2.validate();

                expect(triangle.isValid).to.be.equal(true);
                expect(triangle1.isValid).to.be.equal(true);
                expect(triangle2.isValid).to.be.equal(true);
            });
        });

        context("If triangle side lengths are invalid", () => {

            it("should add a isValid property to the triangle instance with a value of false", () => {
                
                const triangle1 = new Triangle(4, 1, 10);
                const triangle2 = new Triangle(7, 17, 4);
                const triangle3 = new Triangle(25, 1, 2);

                triangle1.validate();
                triangle2.validate();
                triangle3.validate();

                expect(triangle1.isValid).to.be.equal(false);
                expect(triangle2.isValid).to.be.equal(false);
                expect(triangle3.isValid).to.be.equal(false);
            });
        });
    });

    context("getValidTriangles() Static Method", () => {

        it("should return all instances of triangle that are valid triangles", () => {

            const validTriangle1 = new Triangle(4, 10, 10);
            const validTriangle2 = new Triangle(7, 8, 4);
            
            const invalidTriangle1 = new Triangle(4, 1, 10);
            const invalidTriangle2 = new Triangle(7, 17, 4);

            expect(Triangle.getValidTriangles(validTriangle1, validTriangle2, invalidTriangle1, invalidTriangle2)).to.deep.equal([validTriangle1, validTriangle2]);
        });
    });
});

describe("Scalene Class", () => {

    let scalene;

    beforeEach(() => {
        scalene = new Scalene(3, 4, 2);
    })

    it("should inherit from Triangle class", () => {   
        expect(scalene instanceof Triangle).to.be.true;
    });

    it("should create instance of Scalene Class", () => {
        expect(scalene).to.exist;
    });

    context("constructor function", () => {

        it("should have properties side1, side2, side3, isValidTriangle", () => {
            expect(scalene).to.have.all.keys("side1", "side2", "side3", "isValidTriangle");
        });

        it("should set the properties of the Scalene Instance", () => {
            const inValidTriangle = new Scalene(4, 1, 10);

            expect(scalene).to.deep.include({side1: 3, side2: 4, side3: 2, isValidTriangle: true});
            expect(inValidTriangle).to.deep.include({side1: 4, side2: 1, side3: 10, isValidTriangle: false});
        });
    });

    context("isScalene Instance Method", () => {
        
        context("If instance of scalene triangle class is a valid", () => {

            it("should return true", () => {
                expect(scalene.isScalene()).to.be.true;
            });
        });

        context("If instance of scalene traingle class is invalid", () => {
            it("should return false", () => {
                const inValidScalene1 = new Scalene(4, 10, 10);
                const inValidScalene2 = new Scalene(1, 1, 1);

                expect(inValidScalene1.isScalene()).to.be.false;
                expect(inValidScalene2.isScalene()).to.be.false;
            });
        });
    });

    context("validate() Instance Method", () => {

        it("should add a property of isValidScalene", () => {
            scalene.validate();

            expect(scalene).to.have.all.keys("side1", "side2", "side3", "isValidTriangle", "isValidScalene");
        });

        context("If instance of Scalene is valid", () => {
            it("should add an isValidScalene to property the scalene traingle instance with a value of true", () => {
                scalene.validate();

                expect(scalene.isValidScalene).to.be.true;
            });
        });

        context("If insatnce of Scalene is invalid", () => {
            it("should add an isValidScalene property to the scalene traingle instance with a value of false", () => {
                const inValidScalene1 = new Scalene(4, 10, 10);
                const inValidScalene2 = new Scalene(1, 1, 1);

                inValidScalene1.validate();
                inValidScalene2.validate();

                expect(inValidScalene1.isValidScalene).to.be.false;
                expect(inValidScalene2.isValidScalene).to.be.false;
            });
        });
    });
});

describe("Isoscles Traingle class", () => {
    
    let isosceles;

    beforeEach(() => {
        isosceles = new Isosceles(4, 10, 10);
    });

    it("should inherit from Triangle class", () => {
        expect(isosceles instanceof Triangle).to.be.true;
    });

    it("should create instance of Isosceles class", () => {
        expect(isosceles).to.exist;
    });

    context("constructor function", () => {

        it("should have properties side1, side2, side3, isValidTriangle", () => {
            expect(isosceles).to.have.all.keys("side1", "side2", "side3", "isValidTriangle");
        });

        it("should set properties with their corresponding values", () => {
            const inValidTriangle = new Isosceles(4, 1, 10);

            expect(isosceles).to.deep.include({side1: 4, side2: 10, side3: 10, isValidTriangle: true});
            expect(inValidTriangle).to.deep.include({side1: 4, side2: 1, side3: 10, isValidTriangle: false});
        });
    });

    context("isIsosceles Instance Method", () => {
        
        context("If it is a valid Isosceles triangle", () => {
            it("should return true", () => {
                expect(isosceles.isIsosceles()).to.be.true;
            });
        });

        context("If it is not a valid Isosceles triangle", () => {
            it("should return  false", () => {
                const inValidIsosceles1 = new Isosceles(3, 4, 2);
                const inValidIsosceles2 = new Isosceles(8, 3, 6);

                expect(inValidIsosceles1.isIsosceles()).to.be.false;
                expect(inValidIsosceles2.isIsosceles()).to.be.false;
            });
        });
    });

    context("validate() Instance Method", () => {
        
        context("If it is a valid Isosceles triangle", () => {
            it("should add an instance property, isValidIsosceles with value true", () => {
                isosceles.validate();

                expect(isosceles.isValidIsosceles).to.equal(true);
            });
        });

        context("If it is an invalid Isosceles traingle", () => {
            it("should add an instance property, isValidIsosceles with value false", () => {
                const inValidIsosceles1 = new Isosceles(3, 4, 2);
                const inValidIsosceles2 = new Isosceles(8, 3, 6);

                inValidIsosceles1.validate();
                inValidIsosceles2.validate();

                expect(inValidIsosceles1.isValidIsosceles).to.equal(false);
                expect(inValidIsosceles2.isValidIsosceles).to.equal(false);
            });
        });
    });


});