import chai from 'chai';
const { expect } =  chai;
import spies from 'chai-spies';
import { Person } from '../problems/person.js';

chai.use(spies);

describe ("Person class", () => {

    let person;

    beforeEach(() => {
        person = new Person("Akintunde", 150);
    });

    after(() => {
        person = null;
    })

    context('constructor function', () => {

        it('should create an intance of Person Class', () => { 
            expect(person).to.exist;
        });
    
        it('should have properties of name and age', () => {
            expect(person).to.have.all.keys('name', 'age');
        })
    
        it('should set properties of Person Class', () => {
            expect(person.name).to.equal("Akintunde");
            expect(person.age).to.equal(150);
        });

    });

    context('sayHello() Instance Method', () => {

        it("should return a greet message with the Person instance's name", () => {
            expect(person.sayHello()).to.equal("Akintunde you are welcome!");
        });
    });

    context('visit(otherPerson Instance Method', () => {

        it('should return a string stating person visit otherPerson', () => {
            let otherPerson = new Person("Kunle", 99);

            expect(person.visit(otherPerson)).to.equal("Akintunde visited Kunle");
        });
    });

    context('switchVisit(otherPerson) Instance Method', () => {

        it('should invoke the visit Instance Method', () => {
            let otherPerson = new Person("Kunle", 99);

            const spy = chai.spy.on(person, 'visit');

            person.switchVisit(otherPerson);

            expect(spy).to.have.been.called.once;

            expect(person.switchVisit(otherPerson)).to.equal("Akintunde visited Kunle");

            //chai.spy.restore(person);
        });
    });

    context('update(obj) Instance Method', () => {

        context('if incoming argument a valid object', () => {

            it ('should update instance properties', () => {
                let obj = {name: "Dave", age: 75};

                person.update(obj);

                expect(person).to.deep.include({name: "Dave", age: 75});

            });
            
        });

        context('if incoming argument not a valid object', () => {
            
            it('should throw an error if not an object', () => {
                
                let invalidObj1 = ["a", 1];
                let invalidObj2 = "I am a string";
                let invalidObj3 = 23;

                expect(() => person.update(invalidObj1)).to.throw(TypeError, 'Invalid argument, expects a valid object type');
                expect(() => person.update(invalidObj2)).to.throw(TypeError, 'Invalid argument, expects a valid object type');
                expect(() => person.update(invalidObj3)).to.throw(TypeError, 'Invalid argument, expects a valid object type');

            });

            it('should throw an error if properties of object do not match person instance', () => {
                let improperobject1 = {a: "How are you?"};
                let improperobject2 = {name: "Tayo", location: "UK"};
                let improperobject3 = {lastName: "York", school: "Tres"};

                expect(() => person.update(improperobject1)).to.throw(TypeError, "Object properties do not match Person Class");
                expect(() => person.update(improperobject2)).to.throw(TypeError, "Object properties do not match Person Class");
                expect(() => person.update(improperobject3)).to.throw(TypeError, "Object properties do not match Person Class");

            });
        });

    });

    context('tryUpdate(obj) Instance Method', () => {

        context('If person.update() is sucessfully invoked', () => {

            it('should return true', () => {

                let obj = {name: "Dave", age: 75};

                expect(person.tryUpdate(obj)).to.equal(true);
            });
        });

        context('if person.update() was unsucessful invoked', () => {

            it('should return false', () => {

                let invalidObj = ["a", 1];
                let improperobject = {name: "Tayo", location: "UK"};

                expect(person.tryUpdate(invalidObj)).to.equal(false);
                expect(person.tryUpdate(improperobject)).to.equal(false);
            });
        });

    });

    context('greetAll(obj) Instance Method', () => {
        
        context('if bad argument was passed', () => {
            
            it ('should throw an error', () => {
                
                let invalidArr1 = {a: 1};
                let invalidArr2 = "I am a string";
                let invalidArr3 = 23;

                expect(() => Person.greetAll(invalidArr1)).to.throw(TypeError, "Invalid argument, an array was expected");
                expect(() => Person.greetAll(invalidArr2)).to.throw(TypeError, "Invalid argument, an array was expected");
                expect(() => Person.greetAll(invalidArr3)).to.throw(TypeError, "Invalid argument, an array was expected");
            });
        });

        context('if a valid argument was passed', () => {

            it('should return an array of greet strings', () => {
                let person1 = new Person("Taiwo", 35);
                let person2 = new Person("Kehinde", 56);
                let person3 = new Person("Kemi", 30);

                expect(Person.greetAll([person1, person2, person3])).to.deep.equal(["Taiwo you are welcome!", "Kehinde you are welcome!", "Kemi you are welcome!"]);
            });
        });
    });

});